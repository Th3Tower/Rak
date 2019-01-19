const fs = require('fs')
let wishes = []

try {
  let files = fs.readdirSync('./resources/images/tower/')
  for (let file of files) {
    if (file.endsWith('rak.jpg') || file.endsWith('rak.png') || file.endsWith('rak.gif')) {
      wishes.push(file)
    }
  }
} catch (err) {
  console.log(err)
}

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      let random = Math.floor((Math.random() * wishes.length))
      msg.channel.send({embed: {
        color: 6447003,
        title: 'Rak is judging if you deserves him to send a lootbox here..',
        image: {
          url: `attachment://${wishes[random]}`
        }
      },
      files: [{
        attachment: `./resources/images/tower/${wishes[random]}`,
        name: `${wishes[random]}`
      }]
      }).then()
        .catch(console.error)
    }, 1000)
  },
  hide: true
}
