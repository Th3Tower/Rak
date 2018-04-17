let boxes = ["I can't believe it, an", 'Oh my, a ', 'Do you know what is this? It is', "I can't believe this!", 'HEY GUYS! A Lootbox has just', 'WHOA! A Lootbox! Quick', "Nice, looks like there's a", 'Sorry to interrupt, but did someone notice', 'Sugo, this Lootbox that', 'Você sabe o que e isso', 'acredito! Uma Lootbox', 'EI GURIZADA! Uma Lootbox', 'OXE. Uma Lootbox! Rápido,', 'Legal, parece que temos uma Lootbox', 'Desculpa interromper mas...', 'Sugoi! Olhem essa Lootbox que eu', 'Ai meu deus, uma Lootbox', 'OXE. Uma Lootbox!']

module.exports = {
  main: (bot, msg) => {
    for (let box of boxes) {
      if (msg.author.id === '271394014358405121') {
        if (msg.content.startsWith(box)) {
          msg.channel.send("@everyone hey stupid turtles, there's a lootbox here, so hurry up and say PIIIICKLES! xD")
        } else if (msg.content.includes('para disputar ela! Digite') || msg.content.includes('to dispute it! Type')) {
          msg.channel.send("@everyone hey stupid turtles, there's a lootbox here, so hurry up and say PIIIICKLES! xD")
        }
      }
    }
  },
  hide: true
}
