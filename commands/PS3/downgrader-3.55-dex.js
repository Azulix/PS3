const Discord = require('discord.js');

module.exports = {
    name: "downgrader-3.55-dex",

    async run (client, message, args) {

        

            let a = `downgrader-3.55-dex [DEX]-[Hybrid 3.55]`;
            let aa = `https://www.ps3tuto.com/CFW/3.55_Downgrad_DEX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[DOWNGRADER-3.55-DEX]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }}