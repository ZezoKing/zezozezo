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
var Client = new (require ('discord.js')).Client (),
    Prefix = '-',
    ID = '644078333239492628',
    String = 'تكوتا';
Client.login (Token).then (async (Token) => {
  var Channel = Client.channels.get (ID);
  if (Channel) {
    setInterval (() => {
      Channel.send (String);
    }, 4 * 60 * 1000);
  }
}).catch (async (Error) => {
  return console.error (Error);
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    }); 



client.login(process.env.BOT_TOKEN);


