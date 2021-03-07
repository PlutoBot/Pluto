exports.run = (client, message, args) =>
 {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        client.messageutil.sendNoPermission(message.channel, "MANAGE_MESSAGES");
        return;
    };

    let amount = args[0];
    if(amount == "" || amount == 0 || amount == null)
    {
        client.messageutil.sendEmbed(message.channel, "Wrong usage: .purge [amount]");
        return;  
    };

    message.channel.messages.fetch().then(results => {
        message.channel.bulkDelete(results);
        message.channel.send(":white_check_mark: **Cleared " + amount + " messages!**");
    });
};