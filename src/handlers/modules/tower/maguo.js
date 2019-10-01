const fs = require('fs')
let isReady = true
let maguos = []

try {
  let files = fs.readdirSync('./resources/images/tower/')
  for (let file of files) {
    if (file.endsWith('maguo.jpg') || file.endsWith('maguo.png') || file.endsWith('maguo.gif')) {
      maguos.push(file)
    }
  }
} catch (err) {
  console.log(err)
}

module.exports = {
  main: (bot, msg) => {
    if (isReady) {
      isReady = false
      let voiceChannel = msg.member.voiceChannel
      if (voiceChannel != null) {
        voiceChannel.join().then(connection => {
          let dispatcher = connection.playFile('./resources/audio/maguo.mp3')
          dispatcher.on('end', end => {
            voiceChannel.leave()
          })
        }).catch(err => console.log(err))
      }
      setTimeout(() => {
        isReady = true
      }, 5000)
    }

    setTimeout(() => {
      let random = Math.floor((Math.random() * maguos.length))
      msg.channel.send({embed: {
        color: 6447003,
        title: 'O Maguo é immmplacáveuu!!',
        description: `<@140260491359551490>`,
        image: {
          url: `attachment://${maguos[random]}`
        }
      },
      files: [{
        attachment: `./resources/images/tower/${maguos[random]}`,
        name: `${maguos[random]}`
      }]
      }).then()
        .catch(console.error)
    }, 1000)
  },
  hide: true
}
