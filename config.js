const CHECK_INTERVAL_MS = 800;

// 
各サービスのセレクタ（サイト更新で変わる可能性あり。動かなければここを直す）
const SITES = {
  chatgpt: {
    url: 'https://chatgpt.com/',
    inputSelector: '#prompt-textarea',
    sendKey: 'Enter',
  },
  claude: {
    url: 'https://claude.ai/new',
    inputSelector: 'div[contenteditable="true"]',
    sendKey: 'Enter',
  },
};

module.exports = { CHECK_INTERVAL_MS, SITES };
