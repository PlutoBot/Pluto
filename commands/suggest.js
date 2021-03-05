exports.run = (client, message, args) =>
{
    let user = message.author;
    let text = args.join(" ");
    let channel = message.guild.channels.cache.find(c => c.name === "suggestions");

    if(message == null)
    {
        client.messageutil.sendEmbed(message.channel, "Please enter your suggestion!");
        return;
    };

    if(channel == null)
    {
        client.messageutil.sendEmbed(message.channel, "#suggestions does not exist.");
        return;
    };

    client.messageutil.sendEmbed(channel, "Suggestion by " + user.username, "**Suggestion** " + text, "", "Leave your suggestion with .suggest <suggestion>", member.avatarURL());
    client.messageutil.sendEmbed(message.channel, "Suggestion successfully sent!");
};