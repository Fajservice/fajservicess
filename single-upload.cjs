const fs = require('fs');
const path = require('path');


async function uploadSingle() {
  const imagePath = process.argv[2];
  const customId = process.argv[3];

  if (!imagePath) {
    console.log('Usage: node single-upload.cjs <image-path> <custom-id>');
    console.log('Example: node single-upload.cjs ./public/img/logo.webp my-logo');
    return;
  }

  if (!fs.existsSync(imagePath)) {
    console.log('File not found:', imagePath);
    return;
  }

  const fileName = path.basename(imagePath);
  const id = customId || fileName.replace(/\.[^/.]+$/, '');

  console.log(`\nUploading: ${fileName}`);
  console.log(`Custom ID: ${id}\n`);

  const boundary = '----FormBoundary' + Math.random().toString(36).substring(2);
  const fileBuffer = fs.readFileSync(imagePath);
  
  const ext = path.extname(imagePath).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
  };
  const mimeType = mimeTypes[ext] || 'image/jpeg';

  let body = `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n`;
  body += `Content-Type: ${mimeType}\r\n\r\n`;

  const bodyEnd = `\r\n--${boundary}\r\nContent-Disposition: form-data; name="id"\r\n\r\n${id}\r\n--${boundary}--\r\n`;

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
      console.log('Upload successful!\n');
      console.log('CDN URL:', data.result.variants[0]);
      console.log('Image ID:', data.result.id);
    } else {
      console.log('Upload failed:', data.errors);
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}

uploadSingle();