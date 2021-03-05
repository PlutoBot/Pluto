exports.run = (client, message, args) => {
    

    client.messageutil.sendEmbed("Pluto - Stats", `Members: ${client.members.size}`);

}