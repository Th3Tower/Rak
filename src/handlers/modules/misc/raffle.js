const Discord = require('discord.js')
let participantes

module.exports = {
  main: (bot, msg) => {
    if (msg.author.id === '166331543378198528') {
      const embed = new Discord.RichEmbed()
        .setTitle('REACT TO PARTICIPATE IN THE RAKFFLE~')
        .setColor(0x453C75)
        .setDescription('You guys have 30 seconds to react. GO!!\n')
        .addField('Raffle:', `${msg.content.split(' ').shift().join(' ')}\n`)
      msg.channel.send({embed})
    }
  },
  hide: true
}
