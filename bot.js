const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
           var prefix = "#";
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
         if (message.content.startsWith(prefix + "inv")) {
         if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
          message.guild.createChannel('☄-★-welcome-☆-☇ۨ', 'text')
          message.guild.createChannel('☄-★-rules-☆-☇', 'text')
          message.guild.createChannel('☄-★chat-☆-☇', 'text')
          message.guild.createChannel('ּ☄-★-youtube-☆-☇', 'text')
          message.guild.createChannel('ּ☄-★-giveaway-☆-☇', 'text') 
          message.guild.createChannel('ּ☄-★-bot-spam-☆-☇', 'text')
          message.guild.createChannel('ۭCreate a server', 'text')





     message.channel.sendMessage('**Channel Was Succsesfluy Created**')
     }
     });


client.on('message', message => {
     
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + "ban")) {
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (message.author.codes) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('**Mention a User to Ban Him.**').then(message => message.delete(5000));
  if (!message.guild.member(user).bannable) return message.reply("**I Can’t Ban This User**").then(message => message.delete(5000))
  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server.**  `).then(message => message.delete(10000))
}
});


client.on('message', message => {
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + "kick")) {
 if (message.channel.type == "dm") return;
 if (message.author.bot) return;
 if (message.author.codes) return;
 if (message.author.kick) return;
               
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
 

  if (message.mentions.users.size < 1) return message.reply("**Mention a User to Kick Him.**").then(message => message.delete(5000))
 
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can’t Kick This User**").then(message => message.delete(5000))

  message.guild.member(user).kick(7, user);

  message.channel.send(`**${user.tag} Kicked From the Server.**`).then(message => message.delete(10000))

}
});
 client.on('message', message => {
     
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + "ban")) {
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (message.author.codes) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('**Mention a User to Ban Him.**').then(message => message.delete(5000));
  if (!message.guild.member(user).bannable) return message.reply("**I Can’t Ban This User**").then(message => message.delete(5000))
  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server.**  `).then(message => message.delete(10000))
}
});


client.login(process.env.BOT_TOKEN);
