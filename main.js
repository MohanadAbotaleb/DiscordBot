const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();
client.on('ready', () => {
    console.log('bot is ready!');
  });
  
  const prefix = "g!";
  client.on("message", (message) => {
    if(!msg.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");
    }
  });




  
client.login(process.env.TOKEN);