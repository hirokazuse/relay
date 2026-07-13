const { sendTo } = require('./browser');

// turnの管理と、どちらに送るかの中継ロジックのみを担当
function createRelay(pages, initialTurn = 'chatgpt') {
  let turn = initialTurn;

  async function handleClipboardChange(text) {
    const targetPage = turn === 'chatgpt' ? pages.chatgpt : 
pages.claude;
    await sendTo(targetPage, turn, text);
    turn = turn === 'chatgpt' ? 'claude' : 'chatgpt';
    console.log(`次の送信先: ${turn}`);
  }

  return { handleClipboardChange, getTurn: () => turn };
}

module.exports = { createRelay };
