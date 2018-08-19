const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/rak')

async function teste (bot) {
  let tower = await bot.guilds.find('id', '256196701566664714')
  console.log(tower)
  let role = await tower.roles.find('id', '456910721909915670')
  console.log(role)
  try {
    await role.setColor('#0000cc')
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  main: (bot, msg) => {
    msg.channel.send('teste role id9')
    teste(bot)
  },
  hide: true
}
