const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "509037653040300053"; 
var channel = "509037812666859540";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** زيزو رجع **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);
