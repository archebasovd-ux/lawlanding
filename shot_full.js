const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  for (const [name, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 90000 });
    const H = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < H; y += h) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(350); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(900);
    await page.screenshot({ path: `D:/projects/loyerlanding/docs/variant-b-${name}.png`, fullPage: true });
    await page.close();
  }
  await browser.close();
})();
