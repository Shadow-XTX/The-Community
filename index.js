const Discord = require("discord.js");

const TOKEN = "NTA5MjE0MDc0MTczNzg0MDY1.DsKimw.HjbHN5ncOX_jV0fslZLI3h7cUhg"
const PREFIX = "?"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Probably",
    "Probably Not",
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("The Community Is Online! ^-^");
});

bot.on("ready",function(){    
   bot.user.setPresence({ game: { name: "?Help" , type: 0 } });
   
   });

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "guestbook").sendMessage(member.toString() + " Welcome To Our Community!!! <3")

    member.addRole(member.guild.roles.find("name", "Chill"));
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
           message.channel.send("Pong!");
           break;
        case "info":
        message.channel.send("I'm a super cool bot that, in time, gets even cooler!!!");
        break;
        case "8ball":
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("I can't read that.");
            break;
        case "help":
        var embed = new Discord.RichEmbed()
             .addField("?8ball", "Ask 8ball a question, and it will answer.")
             .addField("?Help", "Shows you this list!")
             .addField("?Info", "Info about the bot.")
             .setColor(0xFFFF00)
        message.channel.send(embed);
        break;
    default:
        message.channel.send("Sorry, i don't know that command.")
    }
});

bot.login(TOKEN);