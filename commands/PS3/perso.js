const Discord = require('discord.js');

module.exports = {
    name: "perso",

    async run (client, message, args) {

        
        let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir un mod.`)

        if(ps === 'dex-mmd'){

            let a = `DEX MULTIMOD BY Akram59`;
            let aa = `https://mega.nz/file/VARACLrL#6nMyCacEi6Nj8cBxnXYf4cjSshjfv3aqo6smA_GJqcI`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[MultiMod PS3 DEX]')
            .setDescription(`By \`Akram59#4860\``)
            .addField(a, (`[Mega](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))
        }

        if(ps === 'cobraland'){

            let a = `Ce PKG contient le theme CobraLand/Modding, l'icone du PSN Cobraland, et le coldboot Cobraland Modding`;
            let aa = `https://www.mediafire.com/file/ytqv7njg1t68v3f/UP0001-COBRAXMB1_00-0000000000000000.pkg/file`;

            let b = 'MODLOADER COBRA V1 CEX/DEX GTA5';
            let bb = 'https://www.mediafire.com/file/hxurwsp7owt7au8/UP0001-COBRAGTA1_00-0000000000000000.pkg/file';

            let c = 'XTREME BO2 GSC MOD MENUS 1.19';
            let cc = 'http://www.mediafire.com/file/krwvng3asekp7ih/XTREME_BO2_GSC_MOD_MENU.pkg/file';

            let d = 'BO2 tool By ReYzMoOfficiel'
            let dd = 'https://www.mediafire.com/file/isk8vd1pr05y16c/Tool_cobraland.rar/file'

            let e = "Tool Cobraland By ReyzMoOfficiel"
            let ee = "https://www.mediafire.com/file/isk8vd1pr05y16c/Tool_cobraland.rar/file"

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[CobraLand/Modding]')
            .addField(a, (`[MediaFire](${aa})`))
            .addField(b, (`[MediaFire](${bb})`))
            .addField(c, (`[MediaFire](${cc})`))
            .addField(d, (`[MediaFire](${dd})`))
            .addField(e, (`[MediaFire](${ee})`))

            .setTimestamp() 
            .setFooter(`[By [FR] CobraLand/Modding⭐] -> https://discord.gg/KzDAyDEpfG`)
            .setColor("#000c63"))

        }

        if(ps === 'ccapi-reyz'){

            let a = `CCAPI BY ReYzMoOfficiel#6645 (require ccapi 2.60)`;
            let aa = `http://www.mediafire.com/file/s2dl272gapglskz/CCCAPI.rar/file`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[CCAPI BY ReYzMoOfficiel]')
            .addField(a, (`[Mediafire](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }


        

    }}