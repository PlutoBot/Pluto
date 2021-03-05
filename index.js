const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const token = require(`../token.json`);

// Command handler
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

client.on('ready', async () =>
{
    console.info("Bot Enabled");
    console.log("Members: " + client.users.cache.size);
    console.log("Guilds: " + client.guilds.cache.size);
    console.log("Channels: " + client.channels.cache.size);

    client.user.setActivity("version: BETA")
});

client.on('message', async (message) =>
{

});

client.login(token.TOKEN);