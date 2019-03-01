client.on("message", msg =>{
var prefix = '#',//البرفكس
if(msg.content.startsWith(`${prefix}top-servers`)){ // الامر (topserver)
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  if(!noTop) noTop = 10;
  if(isNaN(noTop)) noTop = 10;
  if(noTop <= 0) noTop = 10;
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed();
  for(let i = 0; i < noTop; i++){
  serveremmbed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  }
  serveremmbed.setColor('#36393e')
  serveremmbed.setTitle(`**Top ${noTop} Servers**`);
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp();
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
}});


client.login(process.env.BOT_TOKEN);
