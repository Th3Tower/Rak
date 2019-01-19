const fs = require('fs')
let ovos = []

try {
  let files = fs.readdirSync('./resources/images/tower/')
  for (let file of files) {
    if (file.endsWith('ovo.jpg') || file.endsWith('ovo.png') || file.endsWith('ovo.gif')) {
      ovos.push(file)
    }
  }
} catch (err) {
  console.log(err)
}

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      let random = Math.floor((Math.random() * ovos.length))
      msg.channel.send({embed: {
        color: 6447003,
        title: 'I think this is an egg, not a turtle .-.',
        image: {
          url: `attachment://${ovos[random]}`
        }
      },
      files: [{
        attachment: `./resources/images/tower/${ovos[random]}`,
        name: `${ovos[random]}`
      }]
      }).then()
        .catch(console.error)
    }, 1000)
  },
  hide: true
}
