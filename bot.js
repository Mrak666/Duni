const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;

bot.on('ready', () => {
  console.log(`Запустился бот ${bot.user.username}`)
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

bot.on('message', msg => {
  if (msg.content ==='~help') {
    msg.reply('**Команды**')
    msg.reply('от LEGEND BOT');
  }
});

  bot.login(token);