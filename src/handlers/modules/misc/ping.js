module.exports = {
  main: (bot, msg) => {
    msg.channel.send(`Pong, stupid turtle! ${bot.ping.toFixed(2)} ms`)
  },
  hide: true
}
