const fs = require('fs')

let pantsus = []
try {
  let files = fs.readdirSync('./resources/images/pantsu/')
  for (let file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
      pantsus.push(file)
    }
  }
} catch (err) {
  console.log(err)
}

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      let random = Math.floor((Math.random() * pantsus.length))
      msg.channel.send({embed: {
        color: 6447003,
        title: "Here's the pantsu delivery",
        image: {
          url: `attachment://${pantsus[random]}`
        }
      },
      files: [{
        attachment: `./resources/images/pantsu/${pantsus[random]}`,
        name: `${pantsus[random]}`
      }]
      }).then()
        .catch(console.error)
    }, 1000)
  },
  hide: true
}
