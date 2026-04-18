import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_JSON_PATH = path.resolve(__dirname, '../fajservicess/public/data/blog.json'); // adjust to your actual path

// ---------- Copy/paste your exact extraction logic ----------
const getPlainTextFromValue = (value) => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value.map(item => getPlainTextFromValue(item)).join(' ');
  }
  if (typeof value === 'object') {
    if (value.text) return getPlainTextFromValue(value.text) + ' ' + (value.desc ? getPlainTextFromValue(value.desc) : '');
    return Object.values(value).map(v => getPlainTextFromValue(v)).join(' ');
  }
  return String(value);
};

const extractAllTextFromBlogPost = (post) => {
  if (!post) return '';
  const textParts = [];

  const fieldsToExtract = [
    'title', 'content', 'sec_concln_h2_p', 'sec_faq_h2_p',
    ...Array.from({ length: 20 }, (_, i) => `sec_${['two','three','four','five','six','seven','eight','nine','ten','eleven','tweleve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'][i] || `_${i+2}`}_h2_p`),
    ...Array.from({ length: 20 }, (_, i) => `sec_${['two','three','four','five','six','seven','eight','nine','ten','eleven','tweleve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'][i] || `_${i+2}`}_bullets`),
    ...Array.from({ length: 20 }, (_, i) => `sec_${['two','three','four','five','six','seven','eight','nine','ten','eleven','tweleve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'][i] || `_${i+2}`}_h2_points`),
  ];

  fieldsToExtract.forEach(field => {
    if (post[field]) textParts.push(getPlainTextFromValue(post[field]));
  });

  const sectionNames = ['two','three','four','five','six','seven','eight','nine','ten','eleven','tweleve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
  sectionNames.forEach(sec => {
    for (let i = 1; i <= 13; i++) {
      const h3Key = `sec_${sec}_h3_${i}`;
      const h3ContentKey = `sec_${sec}_h3_content_${i}`;
      const h3BulletsKey = `sec_${sec}_h3_${i}_bullets`;
      const h3PointsKey = `sec_${sec}_h3_${i}_points`;
      if (post[h3Key]) textParts.push(getPlainTextFromValue(post[h3Key]));
      if (post[h3ContentKey]) textParts.push(getPlainTextFromValue(post[h3ContentKey]));
      if (post[h3BulletsKey]) textParts.push(getPlainTextFromValue(post[h3BulletsKey]));
      if (post[h3PointsKey]) textParts.push(getPlainTextFromValue(post[h3PointsKey]));

      const h4Key = `sec_${sec}_h4_${i}`;
      const h4ContentKey = `sec_${sec}_h4_content_${i}`;
      const h4BulletsKey = `sec_${sec}_h4_${i}_bullets`;
      const h4PointsKey = `sec_${sec}_h4_${i}_points`;
      if (post[h4Key]) textParts.push(getPlainTextFromValue(post[h4Key]));
      if (post[h4ContentKey]) textParts.push(getPlainTextFromValue(post[h4ContentKey]));
      if (post[h4BulletsKey]) textParts.push(getPlainTextFromValue(post[h4BulletsKey]));
      if (post[h4PointsKey]) textParts.push(getPlainTextFromValue(post[h4PointsKey]));
    }
  });

  for (let i = 1; i <= 10; i++) {
    const faqH3 = `sec_faq_h3_${i}`;
    const faqP = `sec_faq_h3_p_${i}`;
    if (post[faqH3]) textParts.push(getPlainTextFromValue(post[faqH3]));
    if (post[faqP]) textParts.push(getPlainTextFromValue(post[faqP]));
  }

  return textParts.join(' ');
};

const computeReadingTime = (text) => {
  if (!text) return '0 min read';
  const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};
// ------------------------------------------------------------

async function enrichBlogWithReadTime() {
  try {
    const data = await fs.promises.readFile(BLOG_JSON_PATH, 'utf-8');
    const posts = JSON.parse(data);

    const updatedPosts = posts.map(post => {
      if (post.readtime) {
        console.log(`⚠️ ${post.slug} already has readtime, skipping (use --force to override)`);
        return post;
      }
      const plainText = extractAllTextFromBlogPost(post);
      const readtime = computeReadingTime(plainText);
      console.log(`✅ ${post.slug} → ${readtime}`);
      return { ...post, readtime };
    });

    await fs.promises.writeFile(BLOG_JSON_PATH, JSON.stringify(updatedPosts, null, 2), 'utf-8');
    console.log(`\n🎉 Updated ${BLOG_JSON_PATH} with readtime fields.`);
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

enrichBlogWithReadTime();