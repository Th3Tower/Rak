const cfg = require.main.require('./config.json')
const Cleverbot = require('clevertype').Cleverbot;

const config = {
  apiKey: cfg.cleverbot,
    mood: {
        emotion: 60,
        engagement: 100,
        regard: 0,
    }
};

let cleverbot = new Cleverbot(config,true);

module.exports = {
  main: (bot, msg) => {
    cleverbot.say(msg.content).then(response => {
      setTimeout(() => {
        msg.reply(response).catch(console.error);
      }, 500);
    });
  },
  hide: true
}
