const Discord = require('discord.js');

module.exports = {
    name: "hfw",

    async run (client, message, args) {

        
        

        

        let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir une version.`)

        if(ps === '4.84'){

            let a = `HFW ps3xploit 4.84.2 [HFW]`;
            let aa = `https://www.ps3tuto.com/HFW/HFW_ps3xploit_4.84.2.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.84]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        
        if(ps === '4.85'){

            let a = `HFW 4.85.1 [HFW] MEGA`;
            let aa = `https://mega.nz/#!SAYhnYYB!6CmxOz0H_pSuVRb4YZ7-lYvY66hP0LlohgVMWfFut4Q`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.85.1]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.86'){

            let a = `HFW 4.86.1 [HFW] MEGA`;
            let aa = `https://mega.nz/#!zIpFnDjB!PwJVSc15POf0jzFDQuUllxJahdzpnb48TW74hJOgjyc`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.86.1]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.87'){

            let a = `HFW 4.87.1 [HFW] MEGA`;
            let aa = `https://mega.nz/file/fAJFwSqL#PeQfhVjbGAi69S4Jr369Tly4trG4Y9ALqdlUIBzW8qk`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.87.1]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

                if(ps === '4.88'){

            let a = `HFW 4.88.1 [HFW]`;
            let aa = `http://ps3xploit.com/hen/release/PS3HEN_3.0.3_4.88_FW.zip`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.88.1]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }
    
    
    
    
    
    
        

    
    
    
    }}