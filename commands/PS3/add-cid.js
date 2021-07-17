const fs = require('fs'),
    Discord = require('discord.js'),
    config = require('../../config.json')

 
module.exports = {
    name: 'add-cid', 

    run: async (client, message, args) => {


        if(message.author.id === config.owner){
  


        const reason = args[0]
        const credit = args.slice(1).join(' ')
        const member = client.user


        if(message.content.length > 100) return message.channel.send('**Veuillez envoyer un CID !**')
        if(message.content.length < 40) return message.channel.send('**Veuillez envoyer un CID !**')
        if (!reason) return message.channel.send(`Veuillez correctement utiliser la commande : **add-cid <cid> <credit>**`)
        if (!credit) return message.channel.send(`Veuillez correctement utiliser la commande : **add-cid <cid> <credit>**`)
        if (!client.db.cid[member.id]) client.db.cid[member.id] = []
        client.db.cid[member.id].unshift({
            reason,
            credit,
            date: Date.now(),
            mod: message.author.id        })

        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`[CID]`)
        .addField('Ajout du cid', reason, true)
        .addField('Ajouté par', message.author, true)
        .addField('Credit', credit, true)
        .setColor("#000c63"))
        message.react("☑️")


    }else return message.channel.send("Erreur vous n'êtres pas dans la whitelist !")
}}
 
