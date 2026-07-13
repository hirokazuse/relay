const { chromium } = require('playwright');
const { SITES } = require('./config');

async function launchContext() {
  return chromium.launchPersistentContext('./browser-profile', {
    headless: false,
    viewport: null,
    args: ['--disable-gpu', '--disable-gpu-compositing', 
'--disable-software-rasterizer'],
  });
}

async function openPages(context) {
  const chatgptPage = await context.newPage();
  await chatgptPage.goto(SITES.chatgpt.url, { timeout: 60000 });

  const claudePage = await context.newPage();
  await claudePage.goto(SITES.claude.url, { timeout: 60000 });

  return { chatgpt: chatgptPage, claude: claudePage };
}

async function sendTo(page, siteKey, text) {
  const site = SITES[siteKey];
  await page.bringToFront();
  await page.click(site.inputSelector);
  await page.keyboard.insertText(text);
  await page.keyboard.press(site.sendKey);
  console.log(`→ ${siteKey} に送信しました`);
}

module.exports = { launchContext, openPages, sendTo };
