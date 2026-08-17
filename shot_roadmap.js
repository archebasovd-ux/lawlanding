const { chromium } = require('D:/projects/buhland/.claude/skills/scroll-scene-shots/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.HOME + '/AppData/Local/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-win64/chrome-headless-shell.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto('http://localhost:7199/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  await page.evaluate(() => {
    const h2 = [...document.querySelectorAll('h2')].find((el) => el.textContent.trim() === 'Как мы работаем');
    const y = h2.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, y - 90);
  });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'D:/projects/loyerlanding/docs/review3-roadmap.png' });

  await browser.close();
})();
