const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const BLOG_JSON_PATH = path.resolve(__dirname, 'public', 'data', 'blog.json');
const BLOG_JSON_DIR = path.dirname(BLOG_JSON_PATH);
const BLOG_JSON_FILE = path.basename(BLOG_JSON_PATH);
const UPDATE_COMMENT_COUNTS_SCRIPT = path.resolve(__dirname, 'updateCommentCounts.js');
const ADD_READ_TIME_SCRIPT = path.resolve(
  __dirname,
  fs.existsSync(path.resolve(__dirname, 'addReadTime.cjs')) ? 'addReadTime.cjs' : 'addReadTime.js'
);

let debounceTimer;
let isRunning = false;
let suppressUntil = 0;

const runScript = (scriptPath) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath], {
      cwd: __dirname,
      stdio: 'inherit',
      shell: false,
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${path.basename(scriptPath)} exited with code ${code}`));
    });
  });

const runBlogUpdaters = async () => {
  if (isRunning) return;

  isRunning = true;
  try {
    console.log(`\nblog.json changed. Running blog updaters...`);
    await runScript(UPDATE_COMMENT_COUNTS_SCRIPT);
    await runScript(ADD_READ_TIME_SCRIPT);
    console.log('Blog updaters finished.');
  } catch (error) {
    console.error('Blog updater failed:', error.message);
  } finally {
    isRunning = false;
    suppressUntil = Date.now() + 1500;
  }
};

const scheduleRun = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(runBlogUpdaters, 500);
};

if (!fs.existsSync(BLOG_JSON_PATH)) {
  console.error(`Cannot find ${BLOG_JSON_PATH}`);
  process.exit(1);
}

console.log(`Watching ${BLOG_JSON_PATH}`);
console.log('Press Ctrl+C to stop.');

fs.watch(BLOG_JSON_DIR, (eventType, filename) => {
  if (filename && filename.toString() !== BLOG_JSON_FILE) return;
  if (!['change', 'rename'].includes(eventType)) return;
  if (Date.now() < suppressUntil) return;

  scheduleRun();
});
