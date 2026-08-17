const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:7199/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review2-hero.png' });

  // marquee + начало специализации
  await page.evaluate(() => window.scrollBy(0, 780));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review2-marquee.png' });

  for (const [name, text] of [['video', 'Видео'], ['praktika', 'Практика'], ['otzyvy', 'Отзывы']]) {
    const h2 = page.locator('h2', { hasText: new RegExp('^' + text + '$') }).first();
    await h2.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `D:/projects/loyerlanding/docs/review2-${name}.png` });
  }
  await browser.close();
})();
