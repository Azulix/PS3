const Discord = require('discord.js');

module.exports = {
    name: "downgrader-9.99",

    async run (client, message, args) {

        

            let a = `downgrader-9.99 [CEX]-[Hybrid 3.55]`;
            let aa = `https://www.ps3tuto.com/CFW/999_Downgrader.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[DOWNGRADER-9.99]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }}