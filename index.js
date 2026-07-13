// ChatGPT <-> Claude コピペ中継ツール
// 人間がコピー(Ctrl+C)するだけで、交互に自動転送・送信する

const { launchContext, openPages } = require('./browser');
const { watchClipboard } = require('./clipboard');
const { createRelay } = require('./relay');

async function main() {
  const context = await launchContext();
  const pages = await openPages(context);
  const relay = createRelay(pages);

  
console.log('準備完了。両方のサイトにログインしてから開始してください。');
  console.log('相手の回答をコピー(Ctrl+C)すると自動で転送されます。');
  console.log(`現在の送信先: ${relay.getTurn()}`);

  watchClipboard(relay.handleClipboardChange);
}

main();
