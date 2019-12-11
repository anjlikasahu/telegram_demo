var token = '1003018287:AAGG2oM_0Z6uxVA1TlsQ3hQHX5uihq6MVKU';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

bot.onText(/\/mighty_mighty/, function(msg, match) {
  
  bot.sendMessage(msg.chat.id, 'YEMIT ').then(function () {
    // reply sent!
  });
});