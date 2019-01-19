const cfg = require.main.require('./config.json')
const Cleverbot = require('clevertype').Cleverbot;

const config = {
  apiKey: cfg.cleverbot,
    mood: {
        emotion: 0,
        engagement: 90,
        regard: 100,
    }
};

let cleverbot = new Cleverbot(config,true);

module.exports = {
  main: (bot, msg) => {
    cleverbot.say(msg.content,msg.author.id).then(response => {
      setTimeout(() => {
        msg.reply(response).catch(console.error);
      }, 500);
    });
  },
  hide: true
}
