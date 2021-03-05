const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const messageutil = require('./messageutil');

client.messageutil = messageutil;
client.config = require("./config.json");

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

// Event handler
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      // If the file is not a JS file, ignore it (thanks, Apple)
      if (!file.endsWith(".js")) return;
      // Load the event file itself
      const event = require(`./events/${file}`);
      // Get just the event name from the file name
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      // without going into too many details, this means each event will be called with the client argument,
      // followed by its "normal" arguments, like message, member, etc etc.
      // This line is awesome by the way. Just sayin'.
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
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