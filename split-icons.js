import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'icons', 'NavIcons.jsx');
const outputDir = path.join(__dirname, 'src', 'icons', 'components');

const content = fs.readFileSync(filePath, 'utf8');

// Split by export const
const exports = content.split(/(?=export const \w+ =)/);

exports.forEach((exp, index) => {
  if (exp.trim()) {
    const match = exp.match(/export const (\w+) =/);
    if (match) {
      const name = match[1];
      const fileName = `${name}.jsx`;
      fs.writeFileSync(path.join(outputDir, fileName), exp.trim());
    }
  }
});

console.log('Icons split into separate files.');