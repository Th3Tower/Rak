const fs = require('fs')

let maids = []
try {
  let files = fs.readdirSync('./resources/images/maid/')
  for (let file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
      maids.push(file)
    }
  }
} catch (err) {
  console.log(err)
}

module.exports = {
  main: (bot, msg) => {
    setTimeout(() => {
      let random = Math.floor((Math.random() * maids.length))
      msg.channel.send({embed: {
        color: 6447003,
        title: 'Maido desu',
        image: {
          url: `attachment://${maids[random]}`
        }
      },
      files: [{
        attachment: `./resources/images/maid/${maids[random]}`,
        name: `${maids[random]}`
      }]
      }).then()
        .catch(console.error)
    }, 1000)
  },
  hide: true
}
