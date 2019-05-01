const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "573149917103783976"; 
var channel = "573151578479919115";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** زيزو رجع **')
    client.guilds.get(server).channels.get(channel).send('** Zezo Is Back **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
