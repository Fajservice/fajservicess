import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_JSON_PATH = path.resolve(__dirname, 'public', 'data', 'blog.json');
const ENV_PATH = path.resolve(__dirname, '.env');

const parseEnvFile = (envContent) => {
  return envContent
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .reduce((acc, line) => {
      const equalsIndex = line.indexOf('=');
      if (equalsIndex === -1) return acc;
      const key = line.slice(0, equalsIndex).trim();
      let value = line.slice(equalsIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      acc[key] = value;
      return acc;
    }, {});
};

const loadEnv = () => {
  const env = { ...process.env };
  if (fs.existsSync(ENV_PATH)) {
    const fileEnv = parseEnvFile(fs.readFileSync(ENV_PATH, 'utf-8'));
    Object.assign(env, fileEnv);
  }
  return env;
};

const env = loadEnv();
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your shell or .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const updateCommentCounts = async () => {
  try {
    const blogJson = await fs.promises.readFile(BLOG_JSON_PATH, 'utf-8');
    const posts = JSON.parse(blogJson);

    const slugs = posts.map((post) => post.slug).filter(Boolean);
    if (!slugs.length) {
      console.error('No slugs found in blog.json.');
      process.exit(1);
    }

    const { data: comments, error } = await supabase
      .from('comments')
      .select('slug')
      .in('slug', slugs);

    if (error) {
      console.error('Supabase query failed:', error);
      process.exit(1);
    }

    const counts = comments.reduce((acc, comment) => {
      if (!comment?.slug) return acc;
      acc[comment.slug] = (acc[comment.slug] || 0) + 1;
      return acc;
    }, {});

    const updatedPosts = posts.map((post) => ({
      ...post,
      comments: counts[post.slug] || 0,
    }));

    await fs.promises.writeFile(BLOG_JSON_PATH, JSON.stringify(updatedPosts, null, 2), 'utf-8');
    console.log(`Updated comment counts for ${updatedPosts.length} blog posts in ${BLOG_JSON_PATH}`);
  } catch (err) {
    console.error('Failed to update blog.json comment counts:', err);
    process.exit(1);
  }
};

updateCommentCounts();
