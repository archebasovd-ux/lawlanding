const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  for (const [w,h] of [[1920,1080],[1600,900],[1440,900],[1280,720],[1100,800]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `D:/projects/loyerlanding/docs/hs-${w}x${h}.png` });
    await page.close();
  }
  await browser.close();
})();
