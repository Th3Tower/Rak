const cfg = require('./../../../../config.json')

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      if (msg.author.id === cfg.ownerId) msg.channel.send(msg.mentions.members.first().id)
    }, 1000)
    msg.delete().then(msg => console.log('')).catch(err => console.log(err))
  },
  hide: true
}
