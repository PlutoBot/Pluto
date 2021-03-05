exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    args.shift();
    let reason = args.join(" ");

    if(user == null || reason == null)
    {
        client.messageutil.sendEmbed(message.channel, "Please enter a reason and user. Ex: .report <user-mention> <reason>");
        return;
    };

    let channel = message.guild.channels.cache.find(c => c.name === "reports");
    if(channel == null)
    {
        client.messageutil.sendEmbed(message.channel, "#reports does not exist.");
        return;
    };

    client.messageutil.sendEmbed(channel, "New Report", user.username + " has been reported.\nReason: " + reason);
    client.messageutil.sendEmbed(message.channel, "Successfully reported " + user.username).then(m => {
        if(m.deletable) m.delete(5000);
        if(message.deletable) message.delete(500);
    });
    return;

}