exports.run = (client, message, args) =>
{

    let user = message.mentions.members.first();
    let name = user.username;
    args.shift();
    let reason = args.join(" ");

    if(user == null && reason == null)
    {
        client.messageutil.sendEmbed(message.channel, ":x: Wrong usage!", ".kick [mention] [reason]");
        return;
    } else if(user == null) {   
        client.messageutil.sendEmbed(message.channel, ":x: Wrong usage!", "You are missing a user-mention!");
        return;
    } else if (reason == null) {
        client.messageutil.sendEmbed(message.channel, ":x: Wrong usage!", "You are missing a reason!");
    };

    user.kick(reason);
    let logs = client.channels.cache.find(c => c.name === "logs");
    logs.send(`:hammer: **Kicked user ${name} because of "${reason}"**`);
    user.send(":hammer: You were kicked from " + message.guild.name + " because of: " + reason).catch(err => {
        client.messageutil.sendEmbed(message.channel, ":x: Could not send a dm to this user! Error: " + err);
    });
    client.messageutil.sendEmbed(message.channel, ":white_check_mark: Successfully kicked " + user.username + " for the reason you specified.");

    return;
};