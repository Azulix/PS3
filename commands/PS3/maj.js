const Discord = require('discord.js')
config = require('../../config.json')
module.exports = {


    run: async (client, message, args) => {

        let prefixrep = config.prefix
        
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('[MAJ]')
            .setDescription(`
            **[ + ]** Ajout de l'hybrid firmware 4.88 [HFW] au ${prefixrep}info cfw
            **[ + ]** Ajout de la commande mode qui permet de rechercher des modes menus dans la base de donnée actuellement : {
-weareghosts-gta5
-galerium-gta5
-salfety-gta5
-reborn-gta5
-nightmare-mw2
-insidious-mw2
-infinity-mw2
-crystallized-mw3
-nay-mw3
-infinity-mw3
            }panel info mode pour voir les exécutions.
            

            
            `)
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63")
)


    },

    name: 'maj'

}