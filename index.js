const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const messageutil = require('./messageutil');
const logsChannel = client.channels.cache.find(c => c.name === "logs");

client.logs = logsChannel;
client.messageutil = messageutil;
client.config = require("./config.json");

const token = require(`../token.json`);

let commands = 0;
let events = 0;

// Command handler
client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => 
{
  if (err) return console.error(err);
  if(err) events = events - 1;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    commands = commands + 1;
    client.commands.set(commandName, props);
  });
});

// Event handler
fs.readdir("./events/", (err, files) =>
{
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
      if(err) events = events - 1;
      events = events + 1;
      delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.on('ready', async () =>
{
    console.log("[-------------------------------------------]");
    console.log(" Welcome to Pluto. Loading the bot.");
    console.log("[-------------------------------------------]");

    console.log(" ");
    console.log(" ");
    console.log("[-------------------------------------------]");
    console.log(" Commands Loaded: " + commands); 
    console.log(" Listeners Loaded: " + events)
    console.log("[-------------------------------------------]");
    console.log(" Bot Enabled")
    console.log("[-------------------------------------------]");

    let channel = client.channels.cache.find(c => c.name === "general");

    channel.send(":white_check_mark: Successfully started PlutoBot.");
    channel.send("Check #startup-details for startup details IF YOU HAVE THAT CHANNEL.");

    let startup = client.channels.cache.find(c => c.name === "startup-details");

    client.user.setActivity("version: BETA")
});

client.login(token.TOKEN);