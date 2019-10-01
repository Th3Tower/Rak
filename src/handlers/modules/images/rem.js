let api = require('nekos-image-api')

module.exports = {
    main: (bot, msg) => {
      setTimeout(() => {
        api.image.rem().then(res => {

            msg.channel.send({embed: {
                color: 6447003,
                title: 'SUBUARU!!',
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
  
