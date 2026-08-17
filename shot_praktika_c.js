const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:7199/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  // Секция «Практика»
  const h2 = page.locator('h2', { hasText: /^Практика$/ }).first();
  await h2.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review3-praktika.png' });

  // Hover на вторую карточку
  const card = page.locator('a[href^="/praktika#"]').nth(1);
  await card.hover();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review3-praktika-hover.png' });

  // Мобильная версия
  await page.setViewportSize({ width: 390, height: 844 });
  await h2.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review3-praktika-mobile.png' });

  await browser.close();
})();
