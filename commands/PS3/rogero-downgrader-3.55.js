const Discord = require('discord.js');

module.exports = {
    name: "rogero-downgrader-3.55",

    async run (client, message, args) {

        

            let a = `rogero-downgrader-3.55 [CEX]-[Hybrid 3.55]`;
            let aa = `https://www.ps3tuto.com/CFW/Rogero_Downgrader_3.55.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[ROGERO-DOWNGRADER-3.55]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }}