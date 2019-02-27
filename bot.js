const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
           var prefix = "#";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Created Bot By Zezo  `,"http://twitch.tv/S-F")
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



client.on("guildMemberAdd", msg => {
  var AlphaE = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(msg.user.username, msg.user.avatarURL)
.setThumbnail(msg.user.avatarURL)
.setTitle(`
مرحبا بك في السيرفر
نتمى ان تدخل الي السيرفر
`)
.addField("هذي الرساله خاصه بك يا حبيبي", `${msg.user.tag}`, true)
.addField(`هذا الرابط خاصه بك`,`Link`, true)
 .setFooter(msg.user.tag, msg.user.avatarURL, true)
msg.user.sendMessage(AlphaE);
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

if (message.content === 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**  , @!  , Zezo#7765   **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});


client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`Official Team`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

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
-----------------------------------------------------------------------------------------------------------------------
اقتراح
client.on('message', message => {
	 var prefix = "#";
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("495359919529263116").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
});

client.login(process.env.BOT_TOKEN);
