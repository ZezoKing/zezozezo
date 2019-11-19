const Discord = require('discord.js');
const client = new Discord.Client();
client.on("message", message => {
let args = message.content.split(" ").slice(1).join(" ");
if(message.author.bot || message.channel.type == "DM") return;
if(message.author.id !== "608511451736571914") return;
if(message.content.startsWith("#say")) {
message.channel.send(`${args}`)
}
})

client.login(process.env.BOT_TOKEN);



