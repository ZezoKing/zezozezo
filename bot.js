setInterval(() => {
    let textchannel = client.channels.find(channel => channel.id === '644073141240594442'); // ايدي الروم الي تبي يرسل فيه 

    textchannel.send("تكوتا كريدت تكوتا") // الرسالة
}, 240000); // 240000 = 4 دقايق

client.login(process.env.BOT_TOKEN);
