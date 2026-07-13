const clipboardy = require('clipboardy').default;
const { CHECK_INTERVAL_MS } = require('./config');

// クリップボードの変化を監視するだけ。責務はこれのみ。
function watchClipboard(onChange) {
  let lastClipboard = '';

  setInterval(async () => {
    try {
      const current = await clipboardy.read();
      if (current && current !== lastClipboard) {
        lastClipboard = current;
        await onChange(current);
      }
    } catch (err) {
      console.error('エラー:', err.message);
    }
  }, CHECK_INTERVAL_MS);
}

module.exports = { watchClipboard };
