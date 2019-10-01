const Discord = require('discord.js');

async function sendHook (msg, hook) {
    let say = msg.content.split(' ')
    say.shift()
    say.shift()
    hook.send(say.join(' '))
}

module.exports = {
    main: (bot, msg) => {
      let user = msg.mentions.users.first()
      if (user == null)
        return
      msg.channel.createWebhook("Rak webhook r!copycat", "https://i.imgur.com/p2qNFag.png")
      .then(webhook => webhook.edit(`${user.username}`, `${user.avatarURL}`)
      .then(wb => {
        const hook = new Discord.WebhookClient(`${wb.id}`, `${wb.token}`)
        sendHook(msg, hook)
        hook.delete()
      }))
      msg.delete()
    },
    hide: true
  }
  