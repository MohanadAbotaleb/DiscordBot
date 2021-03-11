const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require('./config.json');

client.config = config;

    fs.readdir("./events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
          if (!file.endsWith(".js")) return;
          const event = require(`./events/${file}`);
          let eventName = file.split(".")[0];
          client.on(eventName, event.bind(null, client));
          delete require.cache[require.resolve(`./events/${file}`)];
        });
      });

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on("ready", () => {
    client.user.setActivity(`on ${client.guilds.cache.size} servers`);
    console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`);
  });

let prefix = config.prefix;

  client.on("message", (message) => {


    if(message.content.indexOf(prefix) !== 0 || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  

    }
  );




  
client.login(config.token);