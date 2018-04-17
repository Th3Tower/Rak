const Discord = require('discord.js')

module.exports = {
  main: (bot, msg) => {
    const embed = new Discord.RichEmbed()
      .setTitle('HELP COMMANDS')
      .setColor(0x453C75)
      .setDescription('So this turtle needs help?! You can use global prefix **r!** or your guild setted prefix.\nHere are the commands')
      .addField('~ Help Commands ~', '__**r!help**__: this shows a help message \n__**r!stats**__: not working yet, but will show the bot status\n ')
      .addField('~ Audio Commands ~', '__**r!ahbom**__: AH BOM!!!\n__**r!padoru**__: ashide sorio\n__**r!serjao**__: nhaerrooarr\n__**r!nha**__: nhiiaaa\n__**r!wololo**__: wololooooo\n ')
      .addField('~ Images Commands ~', '__**r!pantsu**__: pantsu delivery\n__**r!maid**__: shows some maids\n__**r!party**__: party time yay\n')
      .addField('~ Misc Commands ~', '__**r!mas**__: grrr i hate this mention icon\n__**r!ping**__: pong!\n__**r!say**__: ill say something nice\n__**r!setgame**__: set a game for me to play\n')
      .addField('~ Tower Only ~', '__**r!massam**__: ♥\n')
      .addField('~ Recommend me some new commands ~', 'pm @Gustavo#1955')
    msg.channel.send({embed})
  },
  hide: true
}
