exports.run = (client, message, args) => {
    message.channel.send(":ping_pong: Pong!").catch(console.error);
}