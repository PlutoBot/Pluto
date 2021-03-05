const Discord = require('discord.js');
const client = new Discord.Client();

const token = require(`../token.json`);

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