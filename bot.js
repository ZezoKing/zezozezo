const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "594651464836710400"; 
var channel = "644078333239492628";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(' ياويل امها طاط ')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
