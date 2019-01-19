let participantes

async function raffle (msg) {
  participantes = msg.content.split(' ')
  participantes.shift()
  let raffle = await msg.channel.send("That's the turtle list, i'll choose one of them to be my favorite turtle in 1 minute.\n")
  let content = raffle.content
  let num = 1
  for (let participante of participantes) {
    content += `\n${num}# ${participante}`
    console.log(participante)
    await raffle.edit(content)
    num++
  }
  content = `${content}\n\nOk then, there's ${participantes.length} turtles in this lottery\nEach turtle have ${Math.round(100 / participantes.length)}% of chance to win~\n\nAnd the winner is...`
  raffle.edit(content)
  setTimeout(() => {
     let number = Math.floor(Math.random() * participantes.length) + 1
     msg.channel.send('the number test is: ' + number)
  }, 2000)

}

module.exports = {
  main: (bot, msg) => {
    if (msg.author.id === '166331543378198528') {
      raffle(msg)
    }
  },
  hide: true
}
