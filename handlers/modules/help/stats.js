const Discord = require('discord.js')
const si = require('systeminformation')
// var pidusage = require('pidusage')

let stats = {}

si.currentLoad(function (data) {
  try {
    stats['currentload'] = Math.round(data.currentload * 100)
  } catch (err) {
    console.log(err)
  }
})

si.mem(function (data) {
  try {
    stats['used'] = Math.round(((data.used / 1024) / 1024) * 100) / 100
  } catch (err) {
    console.log(err)
  }
})

si.cpu(function (data) {
  try {
    stats['manufacter'] = data.manufacter
    stats['brand'] = data.brand
    stats['family'] = data.family
    stats['speed'] = data.speed
    stats['cores'] = data.cores
  } catch (err) {
    console.log(err)
  }
})

module.exports = {
  main: (bot, msg) => {
    let ram = Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
    si.mem()
    si.currentLoad()
    const embed = new Discord.RichEmbed()
      .setTitle('RAK STATS')
      .setColor(0x453C75)
      .setDescription('Below are the vps stats')
      .addField('CHANNELS: ', '```' + (bot.channels.size) + '```', true)
      .addField('VOICE: ', '```' + (bot.voiceConnections.size) + '```', true)
      .addField('SERVERS: ', '```' + (bot.guilds.size) + '```', true)
      .addField('USERS: ', '```' + (bot.users.size) + '```', true)
      .addField('CPU USAGE: ', '```' + (stats['currentload']) + '%```', true)
      .addField('MEM BOT: ', '```' + (ram) + ' MBs```', true)
      .addField('MEM SYSTEM: ', '```' + (stats['used']) + ' MBs```', true)
    msg.channel.send({embed})
  },
  hide: true
}
