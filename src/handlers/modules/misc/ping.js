module.exports = {
  main: (bot, msg) => {
    msg.channel.send(`Pong, stupid turtle! ${bot.ping} ms`)
  },
  hide: true
}
