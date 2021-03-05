exports.run = (client, message, args) => 
{
    let responses = [
        "Yes definently!",
        "Definently not!",
        "Probably!",
        "Concentrate and ask again.",
        "I'm exhausted, try again.",
        "My brain exploded :exploding_head:"
    ];

    let response = responses[Math.floor(Math.random() * responses.length)];
    let question = args.join(" ");

    if(question == "")
    {
        client.messageutil.sendEmbed(message.channel, "Please input a question! Ex: .8ball Am i cool?");
        return;
    };

    if(question != "")    client.messageutil.sendEmbed(message.channel, "8ball responds!", "**Question** " + question + "\n**Respose** " + response);
}