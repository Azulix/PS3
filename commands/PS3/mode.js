const Discord = require('discord.js');
module.exports = {
    name: "mode",
    async run (client, message, args) {
        let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir un mode.`)
        //Grand Theft Auto V
        if(ps === 'weareghosts-gta5'){
            let a = `[BLES] [DEX]`;
            let aa = `https://weareghosts.xyz/pages/Downloads.php?file=WeAreGhosts%20sprx%20[BLES-DEX].rar`;
            let b = `[BLES] [CEX]`;
            let bb = `https://weareghosts.xyz/pages/Downloads.php?file=WeAreGhosts%20sprx%20[BLES-CEX].rar`;
            let c = `[BLES] [HEN]`;
            let cc = `https://weareghosts.xyz/pages/Downloads.php?file=WeAreGhosts%20sprx%20[BLES-HEN].rar`;
            let d = `[BLUS] [DEX]`;
            let dd = `https://weareghosts.xyz/pages/Downloads.php?file=WeAreGhosts%20sprx%20[BLUS-DEX].rar`;
            let e = `[BLUS] [CEX]`;
            let ee = `https://weareghosts.xyz/pages/Downloads.php?file=WeAreGhosts%20sprx%20[BLUS-CEX].rar`;
            let f = `[BLUS] [HEN]`;
            let ff = `https://weareghosts.xyz/pages/Downloads.php?file=WeAreGhosts%20sprx%20[BLUS-HEN].rar`;
            let g = `[DIGITAL] [CEX/DEX]`;
            let gg = `https://psndigitalmods.org/forums/index.php?/files/file/35-gta-vnpub31154npeb01283-weareghosts-v21-sprx-cex-hen/`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[WeAreGhosts SPRX GTA5]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))
            .addField(f, (`[Clique ici](${ff})`))
            .addField(g, (`[Clique ici](${gg})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'salfety-gta5'){
            let a = `Salfety [HEN]`;
            let aa = `https://mega.nz/file/iXoWGKpS#fbAKx_q_2rcmyu9pcIfbB1tba9lH9VhXFrWqnh0FtW0`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Salfety SPRX GTA5]')
            .addField(a, (`[Mega](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'galerium-gta5'){
            let a = `Galerium [HEN]`;
            let aa = `https://mega.nz/#!YNY1jaRZ!RdOkR6iqTCGCE6rUlZCs6BSqLBKPZATtQhYir2WY5rU`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Galerium SPRX GTA5]')
            .addField(a, (`[Mega](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'reborn-gta5'){
            let a = `James Reborn [HEN]`;
            let aa = `https://mega.nz/#!9DpzwYhJ!ixPoXUS_1Dg_upJLiaTSjcJQCbzzgIJbRvMxarfqPrA`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[James Reborn SPRX GTA5]')
            .addField(a, (`[Mega](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        //Call Of Duty 

        if(ps === 'nightmare-mw2'){
            let a = `Nightmare [HEN]`;
            let aa = `http://www.mediafire.com/file/yhdfyfun7kuz492/Nightmare.rar/file`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Nightmare SPRX MW2]')
            .addField(a, (`[MediaFire](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'insidious-mw2'){
            let a = `Insidious`;
            let aa = `http://www.mediafire.com/file/926sp5h15w7sk3e/insidiousv2.rar/file`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Insidious SPRX MW2]')
            .addField(a, (`[MediaFire](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'infinity-mw2'){
            let a = `Infinity [HEN]`;
            let aa = `http://www.mediafire.com/file/y1w7to4q1ex5ph9/InfinityV1_Mw2.rar/file`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Infinity SPRX MW2]')
            .addField(a, (`[MediaFire](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'crystallized-mw3'){
            let a = `Crystallized [HEN]`;
            let aa = `http://www.mediafire.com/file/3gwunjhl5s9138e/Mw3.rar/file`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Crystallized MW3]')
            .addField(a, (`[MediaFire](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'nay-mw3'){
            let a = `Nay1995 [HEN]`;
            let aa = `http://www.mediafire.com/file/icjptq78udhn86x/nay1995.rar/file`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Nay1995 MW3]')
            .addField(a, (`[MediaFire](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }
        if(ps === 'infinity-mw3'){
            let a = `Infinity [HEN]`;
            let aa = `http://www.mediafire.com/file/ijx85ait32uz3ad/InfinityV1.rar/file`;
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[Infinity MW3]')
            .addField(a, (`[MediaFire](${aa})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }
    
    
    
        

    
    
    
    }}