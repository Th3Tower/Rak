/*
* Remove th comments below if you want to make only the bot owner capable of use this
*/
// const cfg = require('./../../../config.json')

module.exports = {
  main: (bot, msg) => {
    // if (msg.author.id === cfg.ownerId) {
    let game = msg.content.split(' ')
    game.shift()
    bot.user.setPresence({ game: { name: `${game.join(' ')}` }, status: 'idle' })
      .then(console.log(''))
      .catch(console.error)
    // } else {
    //   msg.reply('You do not have permission to use this command.', 'error', msg)
    // }
  },
  hide: true
}
