module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      let say = msg.content.split(' ')
      say.shift()
      msg.channel.send(say.join(' '))
    }, 1000)
    msg.delete().then(msg => console.log('')).catch(err => console.log(err))
  },
  hide: true
}
