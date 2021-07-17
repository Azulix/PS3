const Discord = require('discord.js');

module.exports = {
    name: "minvercheck",

    async run (client, message, args) {

        

            let a = `minvercheck`;
            let aa = `https://www.ps3tuto.com/CFW/MinVerCheck.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[MINVERCHECK]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }}