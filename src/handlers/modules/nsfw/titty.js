let api = require('nekos-image-api')

module.exports = {
    main: (bot, msg) => {
      setTimeout(() => {
        api.nsfw.tittydropgif().then(res => {

            msg.channel.send({embed: {
                color: 6447003,
                title: 'Huh, perv turtle~',
                image: {
                  url: res.url
                }
              }}).then()
               .catch(console.error)
        });
      }, 1000)
    },
    hide: true
  }
  