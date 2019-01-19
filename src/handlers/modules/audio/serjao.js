let isReady = true

module.exports = {
  main: (bot, msg) => {
    if (isReady) {
      isReady = false
      let voiceChannel = msg.member.voiceChannel
      if (voiceChannel != null) {
        voiceChannel.join().then(connection => {
          let dispatcher = connection.playFile('./resources/audio/serjao.mp3')
          dispatcher.on('end', end => {
            voiceChannel.leave()
          })
        }).catch(err => console.log(err))
      } else {
        msg.channel.send('You need to be in a voice channel to use this, stupid turtle grrr')
      }
      setTimeout(() => {
        isReady = true
      }, 5000)
    }
  },
  hide: true
}
