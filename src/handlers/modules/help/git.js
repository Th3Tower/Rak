const Discord = require('discord.js')

module.exports = {
  main: (bot, msg) => {
    const embed = new Discord.RichEmbed()
      .setTitle('GITHUB')
      .setColor(0x453C75)
      .setDescription('here is the link~ https://github.com/Th3Tower/Rak')
      .setURL('https://github.com/Th3Tower/Rak')
    msg.channel.send({embed})
  },
  hide: true
}
