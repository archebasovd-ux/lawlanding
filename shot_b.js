const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0, n = 0; i < h; i += 900, n++) {
    await page.evaluate((y) => window.scrollTo(0, y), i);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `D:/projects/loyerlanding/docs/b-${String(n).padStart(2,'0')}.png` });
  }
  await browser.close();
})();
