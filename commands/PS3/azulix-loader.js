const Discord = require('discord.js')
module.exports = {

    run: async (client, message) => {
        


        let v1 = "https://www.mediafire.com/file/fzf3mgyjud0709u/update.rpf/file"
        let v2 = "soon..."
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Azulix-Loader]')
            .setDescription(`
            **Azulix ModLoader GTA5 [CEX/DEX/HEN]**`)


            .addField("Azulix V1 | 11 mods + custom script", (`[MediaFire](${v1})`))
            .addField("Azulix V2 | Bientôt", (`[MediaFire](${v2})`))
            .setTimestamp()
            .setColor("#000c63")
        )


    },

    name: 'azulix-loader'

}