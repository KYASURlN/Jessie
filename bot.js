const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Ring-a-ling!!');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('Oh yeah, absolutely.');
        }
    if (message.content.toLowerCase() === 'i love kyo') {
        message.channel.sendMessage("That's so sweet!");
        }
    if (message.content === 'what is my avatar') {
        message.reply(message.author.avatarURL);
        }
    if (message.content.toLowerCase() === 'triggered') {
        message.channel.sendMessage("https://orig00.deviantart.net/3839/f/2018/060/a/0/untitled_1__3__by_kyasurln-dc4o53d.png");
        }
    if (message.content.toLowerCase() === 'bai i yai') {
        message.channel.sendMessage("I SWEAR TO FUCKING GOD I WILL SMASH MY HEAD THROUGH UR FUCKING WINDOW");
        }
    if (message.content.toLowerCase() === 'dancing in september') {
        message.channel.sendMessage("STOPSOTPSOTPSOPTOSPOTPSOPTOPSOTPED YAMETEAM EYAMET");
        }
    if (message.content.toLowerCase() === 'im gay') {
        message.channel.sendMessage("we all know this");
        }
    if (message.content.toLowerCase() === '^ u ^') {
        message.channel.sendMessage("if tomo is saying that pls stop ur killing me");
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
