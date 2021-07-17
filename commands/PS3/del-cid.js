const fs = require('fs'),
    config = require('../../config.json')
    db = require(`../../db.json`)


 
module.exports = {
    name: 'del-cid',
    run: async (client, message, args) => {

       if(message.author.id === config.owner){
        

        
        
        const member = client.user

        const warnIndex = parseInt(args[1], 10) - 1



        const { reason } = client.db.cid[member.id].splice(warnIndex, 1)[0]
        if (!client.db.cid[member.id].length) delete client.db.cid[member.id]
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('**Le CID a été supprimé avec succès ! **')
        message.react("☑️")

    

    }else return message.channel.send("Erreur vous n'êtes pas dans la whitelist !")
}}


