const fs = require('fs')

let parties = []
try {
  let files = fs.readdirSync('./resources/images/party/')
  for (let file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
      parties.push(file)
    }
  }
} catch (err) {
  console.log(err)
}

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      let random = Math.floor((Math.random() * parties.length))
      msg.channel.send({embed: {
        color: 6447003,
        title: 'Les go pari',
        image: {
          url: `attachment://${parties[random]}`
        }
      },
      files: [{
        attachment: `./resources/images/party/${parties[random]}`,
        name: `${parties[random]}`
      }]
      }).then()
        .catch(console.error)
    }, 1000)
  },
  hide: true
}
