exports.run = (client, message, args) =>
 {

    client.messageutil.sendEmbed(message.channel, ":ping_pong: pong!").catch(err => {
        if(err) console.error(err);
    });

};