const fs = require('fs');
const path = require('path');



const IMAGES_FOLDER = './public/img';

const OUTPUT_FILE = './cloudflare-urls.json';

const API_URL = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v1`;

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];

function getAllImages(dir, baseDir = dir) {
  let images = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      images = images.concat(getAllImages(filePath, baseDir));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        const relativePath = path.relative(baseDir, filePath);
        const customId = relativePath
          .replace(/\\/g, '/')
          .replace(/\.[^/.]+$/, '');

        images.push({
          filePath,
          customId,
          fileName: file,
          ext: ext,
        });
      }
    }
  }

  return images;
}
function getMimeType(ext) {
  const mimes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.avif': 'image/avif',
  };
  return mimes[ext] || 'image/jpeg';
}
async function uploadImage(image) {
  try {
    const fileBuffer = fs.readFileSync(image.filePath);
    const mimeType = getMimeType(image.ext);
    
    const boundary = '----CloudflareFormBoundary' + Math.random().toString(36).substring(2);
    
    let body = '';
  
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="file"; filename="${image.fileName}"\r\n`;
    body += `Content-Type: ${mimeType}\r\n\r\n`;
    
    const idPart = `\r\n--${boundary}\r\n`;
    const idContent = `Content-Disposition: form-data; name="id"\r\n\r\n${image.customId}\r\n--${boundary}--\r\n`;
    const bodyStart = Buffer.from(body, 'utf8');
    const bodyMiddle = Buffer.from(idPart + idContent, 'utf8');
    const fullBody = Buffer.concat([bodyStart, fileBuffer, bodyMiddle]);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      },
      body: fullBody,
    });

    const data = await response.json();

    if (data.success) {
      return {
        originalPath: image.customId,
        cdnUrl: data.result.variants[0],
        id: data.result.id,
        success: true,
      };
    } else {
      console.error(`Failed: ${image.customId}`, data.errors);
      return {
        originalPath: image.customId,
        error: data.errors,
        success: false,
      };
    }
  } catch (error) {
    console.error(`Error: ${image.customId}`, error.message);
    return {
      originalPath: image.customId,
      error: error.message,
      success: false,
    };
  }
}

async function bulkUpload() {
  console.log('Scanning for images...\n');

  const images = getAllImages(IMAGES_FOLDER);
  console.log(`Found ${images.length} images\n`);

  if (images.length === 0) {
    console.log('No images found! Check IMAGES_FOLDER path.');
    return;
  }

  const results = {
    success: [],
    failed: [],
    mapping: {},
  };

  console.log(' Starting upload...\n');

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const progress = `[${i + 1}/${images.length}]`;

    console.log(`${progress} Uploading: ${image.customId}`);

    const result = await uploadImage(image);

    if (result.success) {
      console.log(`${progress} Done: ${result.cdnUrl}\n`);
      results.success.push(result);
      results.mapping[image.customId] = result.cdnUrl;
    } else {
      console.log(`${progress} Failed\n`);
      results.failed.push(result);
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

  console.log('\n========== SUMMARY ==========');
  console.log(` Success: ${results.success.length}`);
  console.log(` Failed: ${results.failed.length}`);
  console.log(` Results saved to: ${OUTPUT_FILE}`);
}

bulkUpload();