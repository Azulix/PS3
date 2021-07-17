const Discord = require('discord.js')
module.exports = {
    run: async (client, message, args) => {

         let inviteLink = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
         let supportURL = `https://discord.gg/4PDN8kauVX`;
         let x = `Serveur Support`;
         let y = `Inviter le bot`;
        if (message.guild){
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('***Liens***')
            .setColor("#000c63")

            .addField(y, (`[Clique ici](${inviteLink})`))
            .addField(x, (`[Clique ici](${supportURL})`)))


    }},

    name: 'invite'


}
