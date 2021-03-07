const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: No permission.");

    let title, description, color;

    const questions = [
        "Title",
        "Description",
        "Color"
    ];

    let counter = 0;

    const filter = m => m.author.id === message.author.id;

    const collector = new Discord.MessageCollector(message.channel, filter, {
        max: questions.length,
        time: 1000 * 15
    });

    message.channel.send(questions[counter]);

    collector.on('collect', m => {
        if(counter < questions.length) 
        {
            m.channel.send(questions[counter++]);
        };
    });

    collector.on('end', collected => {
        let counter = 0;

        collected.forEach((value) => {
            title = questions[0];
            description = questions[1];
            color = questions[2];

            let embed = new Discord.MessageEmbed();
            embed.setTitle(title);
            embed.setDescription(description);
            embed.setColor(color);
            embed.setFooter("Embed Creator | Pluto");

            message.channel.send(embed);
        });
    });

}