const moment = require('moment'),
    Discord = require('discord.js')
 
moment.locale('fr')
 
module.exports = {
    name: 'cid',

    run: async (client, message, args) => {

        const member = client.user
        
        if (!client.db.cid[member.id]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`[CID]`)
        .setColor("#ffffff")
        .setDescription(`**Aucun CID dispo !**`))


        message.channel.send(new Discord.MessageEmbed()
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setColor("#000c63")
        .setDescription(`**Total cid(s) :** ${client.db.cid[member.id].length}\n\n__**15 derniers cid**__\n\n${client.db.cid[member.id].slice(0, 15).map((warn, i) => `**${i + 1}.** ${warn.reason}\n Crédit : **${warn.credit}** \n Ajouté ${moment(warn.date).fromNow()} par <@${warn.mod}>`).join('\n\n')}`))
            
    }}
    

 