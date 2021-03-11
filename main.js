const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.on('ready', () => {
    console.log('bot is ready!');
  });
  
let prefix = config.prefix;

  client.on("message", (message) => {
    if(!msg.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");
    }
  });




  
client.login(config.token);