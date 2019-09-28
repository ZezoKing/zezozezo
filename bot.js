const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "624906460761030656"; 
var channel = "627422703103508490";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(' #credits  ')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
