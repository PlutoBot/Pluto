const Discord = require('discord.js');

exports.run = (client, message, args) => {
    

    let embed = new Discord.MessageEmbed()
    .setTitle("Pluto - Help Command")
    .setDescription("Using this command returns a list over every single command in the bot!")
    .setThumbnail(client.user.avatarURL())
    .setFooter("Made by Team Pluto", client.user.avatarURL())
    .addField(".help", "Returns this page!")
    .addField(".8ball [question]", "Get a random 8ball response on a question!")
    .addField(".suggest [suggestion]", "Suggest something to the server!")
    .addField(".stats", "Returns stats from Pluto.")
    .addField(".report [user] [reason]", "Report a user!")
    .addField(".image", "[Dev Tool] Returns the bot logo")
    .addField(".support", "Get the discord server link!")
    .setColor("#00fff7")

    message.channel.send(embed);

}