exports.run = (client, message, args) => {
    message.channel.send(client.user.avatarURL()).catch(console.error);
}