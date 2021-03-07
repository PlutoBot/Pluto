const Discord = require('discord.js');
const config = require(`../config.json`);

exports.run = (client, message, args) => {
    

    let loading = new Discord.MessageEmbed()
    .setTitle(":scroll: Loading stats from Pluto's Bot Analystics.")
    .setColor(config.color)
    .setDescription("This can take up to 5 seconds.")
    .setThumbnail(client.user.avatarURL())

    message.channel.send(loading).then(m => {
        setTimeout(() => {
            loading.setTitle(":white_check_mark: Pluto Stats");
            loading.addField("Total Guilds", client.guilds.cache.size);
            loading.addField("Total Channels", client.channels.cache.size);
        }, 3500);
    });

}