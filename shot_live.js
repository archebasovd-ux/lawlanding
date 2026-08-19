const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://lawlanding-five.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review4-hero-live.png' });
  await browser.close();
})();
