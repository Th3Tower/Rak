let emojis = [
  '\uD83C\uDDF7',
  '\uD83C\uDDE6',
  '\uD83C\uDDEF',
  '\uD83D\uDD3C',
  '\uD83C\uDDE9',
  '\uD83C\uDD70'
]

async function reagir (message) {
  for (let emoji of emojis) {
    try {
      await message.react(emoji)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = {
  main: (bot, msg) => {
    try {
      msg.channel.fetchMessages({ limit: 2 }).then(messages => {
        reagir(messages.last())
        setTimeout(() => {
          msg.delete().then().catch(err => console.log(err))
        }, 500)
      })
    } catch (e) {
      console.log(e)
    }
  }
}
