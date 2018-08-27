'use strict'
const cfg = require('./config.json')
const fs = require('fs')
const path = require('path')

/*
* Require for discord.js with parameters for cache size and disable some events/everyone
*/
let Discord = require('discord.js')
const bot = new Discord.Client({
  messageCacheMaxSize: 4048,
  messageCacheLifetime: 1680,
  messageSweepInterval: 2600,
  disableEveryone: true,
  fetchAllMembers: false,
  disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking']
})

/*
* Some variables that the bot uses
*/
bot.DETAILED_LOGGING = false
bot.DELETE_COMMANDS = false
bot.PREFIX = 'ra!'
bot.COLOR = 0x351C75
bot.SUCCESS_COLOR = 0x00ff00
bot.ERROR_COLOR = 0x0000ff
bot.INFO_COLOR = 0x0000ff

let commands = {}

/*
* Check and require the files from modules
*/
let checkFile = (file, filePath = '') => {
  if (file.endsWith('.js')) {
    commands[file.slice(0, -3)] = require(path.join(__dirname, filePath, file))
    if (bot.DETAILED_LOGGING) console.log('Loaded ' + file)
  }
}

/*
* Recursive load all the dir and files in src folder
*/
let recursiveLoad = (recursive, filePath = '') => {
  let files = fs.readdirSync(path.join(__dirname, filePath, recursive))
  for (let file of files) {
    let finalPath = path.join(filePath, recursive)
    if (fs.statSync(path.join(__dirname, finalPath, file)).isDirectory()) {
      recursiveLoad(file, finalPath)
    } else {
      checkFile(file, finalPath)
    }
  }
}

/*
* Console msg for a sucessfully conection
*/
bot.on('ready', function () {
  console.log('Im ready, turtles!! hunting in ' + bot.guilds.array().length + ' guilds.')
  bot.user.setStatus('online', '')
  bot.user.setPresence({ game: { name: 'r!help' }, status: 'online' })
    .then(console.log('status changed'))
    .catch(console.error)
  recursiveLoad('src')
})

/*
* Check and call the command sended by user
*/
let checkCommand = (msg, isMention, command) => {
  if (isMention) {
      msg.content = msg.content.split(' ').splice(1, msg.content.split(' ').length).join(' ')
      try {
          commands['cleverbot'].main(bot, msg)
      } catch (err) {
        console.log('command not found')
      }
  } else {
    msg.content = msg.content.replace(bot.PREFIX + command + ' ', '')
    if (command) {
      try {
        commands[command].main(bot, msg)
      } catch (err) {
        console.log('command not found')
      }
    }
  }
}

/*
* Handler all msg and commands
*/
bot.on('message', msg => {
  commands['tower'].main(bot, msg)
  let command
  if (msg.content.startsWith('<@' + bot.user.id + '>') || msg.content.startsWith('<@!' + bot.user.id + '>')) {
    checkCommand(msg, true, command)
    if (bot.DELETE_COMMANDS) msg.delete()
  } else if (msg.content.startsWith(bot.PREFIX)) {
    command = msg.content.split(bot.PREFIX)[1].split(' ')[0]
    checkCommand(msg, false, command)
    if (bot.DELETE_COMMANDS) msg.delete()
  } else if (msg.content.startsWith(cfg.prefix)) {
    command = msg.content.split(cfg.prefix)[1].split(' ')[0]
    checkCommand(msg, false, command)
  }
})

/*
* error event
*/
bot.on('error', (err) => {
  console.log('=========ERROR=========')
  console.log(err)
  console.log('========END ERROR======”')
})

/*
* disconnect event
*/
bot.on('disconnected', () => {
  console.log('Disconnected!')
})

/*
* in construction
* async function changeCollor (bot) {
*  let tower = await bot.guilds.find('id', '256196701566664714')
*  let role = await tower.roles.find('id', '456910721909915670')
*  while (true) {
*    await change(role, '#00ff00')
*    await sleep(1000)
*    await change(role, '#ffff00')
*    await sleep(1000)
*  }
*}
*/

function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function change (role, collor) {
  try {
    await role.setColor(collor)
  } catch (e) {
    console.log(e)
  }
}

/*
* bot login with token in json file
*/
bot.login(cfg.token)
