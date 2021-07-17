const Discord = require('discord.js')
config = require('../../config.json')
module.exports = {

    run: async (client, message, args) => {
        
        let prefixrep = config.prefix


        message.channel.send(new Discord.MessageEmbed()
            .setTitle('[HELP]')
            .setDescription(`

            **CFW PS3 :**
            \`${prefixrep}info cfw\`
            **HFW PS3 :**
            \`${prefixrep}info hfw\`
            **Autre MAJ :**
            \`${prefixrep}info maj\`
            **Homebrews 3.55 :**
            \`${prefixrep}info pkg-3.55\`
            **Homebrews 4.xx :**
            \`${prefixrep}info pkg\`
            **Autre :**
            \`${prefixrep}info autre\`
            **IMPORTANT :**
            \`${prefixrep}warning\`
            **Cid :**
            \`${prefixrep}info cid\`
            **Erreur :**
            \`${prefixrep}info erreur\`
            **PKG | MOD**
            \`${prefixrep}info perso\`
            **Mode**
            \`${prefixrep}info mode\`
            **ModLoader Azulix**
            \`${prefixrep}azulix-loader\`


            CFW & HFW :**Powered by https://www.ps3tuto.com/**
            Autre : **Powered by http://www.logic-sunrise.com/**
            SPRX-HEN : **Powered by https://hentools.github.io/**



            `)
            .setTimestamp()
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63")
        )


    },

    name: 'help'

}