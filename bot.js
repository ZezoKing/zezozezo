const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "646630213937266688"; 
var channel = "646630398574723073";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('كريدت يا ويل امها')
    },305);
}) 


client.login(process.env.BOT_TOKEN);

