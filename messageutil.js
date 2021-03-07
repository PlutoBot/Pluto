/*

------------------------------------------------------------------------------------------------

                        Message Utils by Ivan
                        DO NOT REDISTIBUTE!!

------------------------------------------------------------------------------------------------

*/

const { MessageEmbed } = require("discord.js");
const config = require(`./config.json`);

module.exports = 
{
    sendEmbed: sendEmbed,
    message: message,
    sendError: sendError,
    editEmbed: editEmbed
};


function sendEmbed(channel,title,description,color,footer,fields,thumbnail,iconURL)
{
    let Embed = new MessageEmbed()
    .setTitle(title || "")
    .setDescription(description || "")
    .setColor(color || config.color)
    .setFooter("Made by Team Pluto | Need support? .support", "https://cdn.discordapp.com/avatars/817337253982240798/d5f6694d62684fac2d18c57786cb07cd.webp")
    .setThumbnail(thumbnail || "")

    if(fields) Embed.addFields(fields);

    return channel.send(Embed)
};


function message(channel,message)
{

    return channel.send(message);
};

function sendError(channel,message)
{
    return sendEmbed(
        channel,
        "ERROR",
        message,
        config.co,
        "If you feel like this is an error, please message Ivan.#2005",
        "",
        "",
        "",
    )
};

function sendNoPermission(channel, permission)
{
    return sendEmbed(
        channel,
        ":x: Error performing that action!",
        "You are missing the required permission of " + permission,
        config.color,
        "",
        "",
        "",
    );
};

function editEmbed(message,title,desc,color,footer)
{
    return message.edit(new MessageEmbed().setTitle(title||"").setDescription(desc||"").setColor(color||config.embed.colors.main).setFooter(footer||config.embed.footer));
};