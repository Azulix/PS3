const Discord = require('discord.js')
config = require('../../config.json')
module.exports = {

    run: async (client, message, args) => {
        
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('[ATTENTION]')
            .setDescription(`
            

            \`\`\`
            Attention: Ni moi ni le développeur du CFW ne pourra être tenu responsable en cas de brick de votre PS3 lors de l'installation d'un CFW ou autre.
            \`\`\`
            `)
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63")
)


    },

    name: 'warning'

}