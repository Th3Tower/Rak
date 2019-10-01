const Discord = require('discord.js')
const link = "https://discordapp.com/oauth2/authorize?client_id=400476199434059789&scope=bot&permissions=1681255617"

module.exports = {
  main: (bot, msg) => {
    const embed = {
      "title": "** Some commands to show this bunch of turtles how to hunt!**",
      "description": `[You can invite me to your server with this link!](${link})`,
      "url": "",
      "color": 3333333,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-green-512.png",
        "text": "Recommend me some new commands :)"
      },
      "thumbnail": {
        "url": msg.guild.iconURL
      },
      "author": {
        "name": bot.user.username,
        "url": bot.user.avatarURL,
        "icon_url": bot.user.avatarURL
      },
      "fields": [
        {
          "name": "🙈 - IMAGES",
          "value": "`r!cat` - `r!maid` - `r!party` - `r!pantsu` - `r!emilia` - `r!rem`"
        },
        {
          "name": "🙊 - MISC / FUN",
          "value": "`r!rajada` - `r!mas` - `r!setgame <game>` - `r!say <phrase>` - `r!ovo` - `r!wish` - `r!ping` - `r!gif`"
        },
        {
          "name": "🙉 - AUDIO COMMANDS",
          "value": "`r!bulancia` - `r!ahbom` - `r!padoru` - `r!serjao` - `r!nha` - `r!wololo` - `r!maguo` - `r!massam` - `r!tuturu` - `r!obviamente`"
        },
        {
          "name": "🔞 - NSFW",
          "value": "`r!cosplay` - `r!amateur` - `r!ahegao` - `r!boobs` - `r!ass`\n`r!snapchat` - `r!catgirl` - `r!uniform` - `r!futa` - `r!bara`\n`r!pussy` - `r!titty` - `r!lingerie`"
        },
        {
          "name": "🆘 - HELP COMMANDS",
          "value": "`r!help` - `r!stats` - `r!invite`"
        },
        {
          "name": "▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪",
          "value": `created by: <@166331543378198528>`
        }
      ]
    }
    msg.channel.send({embed})
  },
  hide: true
}


/*ahegao, amateur, ass, boobs, catgirl, cosplay, snapchat*/
