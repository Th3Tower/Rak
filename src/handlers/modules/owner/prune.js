const cfg = require.main.require('./config.json')

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      	if (msg.author.id === cfg.ownerId) {
		let message = msg.content.split(' ')
		msg.channel.fetchMessages({ limit: message[1] }).then(messages => msg.channel.bulkDelete(messages)).catch(err => console.log(err))
	}
    }, 1000)
    msg.delete().then(msg => console.log('')).catch(err => console.log(err))
  },
  hide: true
}
