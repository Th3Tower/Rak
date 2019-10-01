const link = "https://discordapp.com/oauth2/authorize?client_id=400476199434059789&scope=bot&permissions=1681255617"
const Discord = require('discord.js')

module.exports = {
  main: (bot, msg) => {
    const embed = new Discord.RichEmbed()
      .setTitle('~GUILD INVITE~')
      .setColor(0x453C75)
      .setDescription(`here is the [invite link](${link})`)
      .setURL(link)
    msg.channel.send({embed})
  },
  hide: true
}