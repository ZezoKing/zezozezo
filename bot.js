const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');
const moment = require('moment');
var prefix = "+";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` تكوتا  `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
setInterval(() => {
    let textchannel = client.channels.find(channel => channel.id === '644073141240594442'); // ايدي الروم الي تبي يرسل فيه 

    textchannel.send("تكوتا كريدت تكوتا") // الرسالة
}, 240000); // 240000 = 4 دقايق

client.login(process.env.BOT_TOKEN);


