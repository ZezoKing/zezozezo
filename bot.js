const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on("ready", () => {
  console.log(`I AM Ready!`);
 console.log(`Logged in as ${client.user.tag}!`); 
  client.user.setStatus('online');
})
client.on("message",message =>{
if (!message.guild) return;
  if(message.content.startsWith("!ping")){
let ping =  new Discord.RichEmbed()
.setTitle(`> Ping: ${Date.now() - message.createdTimestamp}`)
message.channel.send(ping)
  }
})

client.login(process.env.BOT_TOKEN);

