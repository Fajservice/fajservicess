const fs = require('fs');
const path = require('path');

const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID || '513a1be78e7b9d8a6d8553ab26e8ad99';
const CF_API_TOKEN = process.env.CF_API_TOKEN;

function validateConfig() {
  if (!CF_API_TOKEN) {
    console.log('Missing CF_API_TOKEN environment variable.');
    console.log('Set it before running this script.');
    process.exit(1);
  }
}

async function deleteImage(imageId) {
  console.log(`Deleting existing image: ${imageId}...`);
  
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v1/${imageId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${CF_API_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    
    if (data.success) {
      console.log('Deleted successfully!\n');
      return true;
    } else {
      console.log('Delete failed (maybe not exists):', data.errors?.[0]?.message || 'Unknown');
      return true;
    }
  } catch (error) {
    console.log('Delete error:', error.message);
    return true;
  }
}

async function uploadImage(imagePath, customId) {
  console.log(`Uploading: ${path.basename(imagePath)}`);
  console.log(`Custom ID: ${customId}\n`);

  const fileName = path.basename(imagePath);
  const fileBuffer = fs.readFileSync(imagePath);
  
  const ext = path.extname(imagePath).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  const mimeType = mimeTypes[ext] || 'image/jpeg';

  const boundary = '----FormBoundary' + Math.random().toString(36).substring(2);

  let body = `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n`;
  body += `Content-Type: ${mimeType}\r\n\r\n`;

  const bodyEnd = `\r\n--${boundary}\r\nContent-Disposition: form-data; name="id"\r\n\r\n${customId}\r\n--${boundary}--\r\n`;

  const fullBody = Buffer.concat([
    Buffer.from(body, 'utf8'),
    fileBuffer,
    Buffer.from(bodyEnd, 'utf8'),
  ]);

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/images/v1`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${CF_API_TOKEN}`,
          'Content-Type': `multipart/form-data; boundary=${boundary}`,
        },
        body: fullBody,
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log(' Upload successful!\n');
      console.log(' CDN URL:', data.result.variants[0]);
      console.log('  Image ID:', data.result.id);
    } else {
      console.log(' Upload failed:', data.errors);
    }
  } catch (error) {
    console.log(' Error:', error.message);
  }
}

async function replaceImage() {
  validateConfig();

  const imagePath = process.argv[2];
  const customId = process.argv[3];

  if (!imagePath) {
    console.log('\n Usage: node replace-image.cjs <image-path> <custom-id>\n');
    console.log('Example: node replace-image.cjs ./public/img/logo.webp FajLogo\n');
    return;
  }

  if (!fs.existsSync(imagePath)) {
    console.log(' File not found:', imagePath);
    return;
  }

  const id = customId || path.basename(imagePath).replace(/\.[^/.]+$/, '');

  console.log('\n REPLACING IMAGE\n');
  

  await deleteImage(id);
  

  await new Promise(resolve => setTimeout(resolve, 500));
  

  await uploadImage(imagePath, id);
}

replaceImage();
