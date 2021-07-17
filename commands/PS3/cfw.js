const Discord = require('discord.js');

module.exports = {
    name: "cfw",

    async run (client, message, args) {

        
        let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir une version.`)

        if(ps === '3.55'){

            let a = `CFW 3.55 Geohot [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Geohot%203.55%20CEX.rar`;

            let b = `Rebug 3.55.4 [CEX/DEX]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rebug%203.55.4%20CEX.rar`;

            let c = `Rogero 3.55 v7 [CEX]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Rogero%203.55%20V3.7%20CEX.rar`;

            let d = `MiralaTijera 3.55 no-BD [CEX/NO-BD]`;
            let dd = `https://www.ps3tuto.com/CFW/CFW%20MiralaTijera%203.55%20CEX.rar`;

            let e = `Rogero 3.55 v2 [DEX]`;
            let ee = `https://www.ps3tuto.com/CFW/CFW%20Rogero%20%203.55%20v2%20DEX.rar`;

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[3.55]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.21'){

            let a = `Rebug 4.21.2 REX [CEX/DEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%20%204.21.2%20REX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.21]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.30'){

            let a = `Rebug 4.30 REX [CEX/DEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.30%20REX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.30]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.40'){

            let a = `Rogero 4.40 v1.03 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rogero%20%204.40%20v1.03%20CEX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.40]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }


        if(ps === '4.41'){

            let a = `Rebug 4.41 Lite Patché 9.99 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%20Lite%20patche%209.99.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.41]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.41'){

            let a = `Rebug 4.41 Lite Patché 9.99 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%20Lite%20patche%209.99.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.41]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.46'){

            let a = `Rebug 4.46 D-REX [DEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.46%20D-REX.rar`;

            let b = `Rebug 4.46 REX no-BD [CEX/DEX/no-BD]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rebug%203.55.4%20CEX.rar`;

            let c = `Rogero 4.46 v1.01 [CEX]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Rogero%203.55%20V3.7%20CEX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.46]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.50'){

            let a = `Habib 4.50 v1.00 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Habib%204.50%20v1.00%20CEX.rar`;

            let b = `Rogero 4.50 v1.00 [CEX]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rogero%204.50%20v1.01%20CEX.rar`;

            let c = `MiralaTijera 4.50 [CEX/NO-BD]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20MiralaTijera%204.50%20CEX.rar`;

            let d = `PS3ITA 4.50 v1.00 [DEX]`;
            let dd = `https://www.ps3tuto.com/CFW/CFW%20PS3ITA%204.50%20DEX.rar`;

            let e = `PS3ITA 4.50 [DEX/Cobra]`;
            let ee = `https://www.ps3tuto.com/CFW/CFW%20PS3ITA%20Cobra%204.50%20DEX.rar`;

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.50]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.53'){

            let a = `Habib 4.53 v1.05 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Habib%204.53%20v1.05%20CEX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.53]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.55'){

            let a = `Rogero 4.55 v1.00 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rogero%204.55%20v1.00%20CEX.rar`;

            let b = `Habib/Cobra 4.55 v1.03 [CEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rogero%204.50%20v1.01%20CEX.rar`;

            let c = `Arch 4.55 no-BD v1.00 [CEX/no-BD]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20MiralaTijera%204.50%20CEX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.55]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.60'){

            let a = `Habib 4.60 v1.00 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Habib%204.60%20v1.00%20CEX.rar`;

            let b = `Arch 4.60 v1.00 [CEX]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Arch%204.60%20v1.00%20CEX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.60]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.65'){

            let a = `Darknet/Cobra 4.65 v1.00 [CEX/Cobra]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20DarknetCobra%204.65%20v1.00%20CEX.rar`;

            let b = `Habib Cobra 4.65 v1.02 [CEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Habib%20Cobra%204.65%20v1.02%20CEX.rar`;

            let c = `Rebug 4.65.2 D-REX/Cobra [DEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.65.2%20D-REX.rar`;

            let d = `Rebug 4.65.2 REX/Cobra [CEX/DEX/Cobra]`;
            let dd = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.65.2%20REX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.65]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }



        if(ps === '4.66'){

            let a = `Darknet/Cobra 4.66 v1.02 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20DarknetCobra%204.66%20v1.02%20CEX.rar`;

            let b = `Habib Cobra 4.66 v1.01 [CEX]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rebug%203.55.4%20CEX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.66]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.70'){

            let a = `Rebug/Cobra D-REX 4.70.1 [DEX/Cobra]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.70.1%20D-REX.rar`;

            let b = `Darknet/Cobra 7.05 4.70 v1.00 [CEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20DarknetCobra%207.05%204.70%20v1.00%20CEX.rar`;

            let c = `Habib/Cobra 4.70 v1.03 [CEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.65.2%20D-REX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.70]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.75'){

            let a = `Habib 4.75 v1.00 CEX [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Habib%204.75%20v1.00%20CEX.rar`;

            let b = `Habib Cobra 4.75 BETA 0.4 [CEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Habib%20Cobra%204.75%20BETA%200.4%20CEX.rar`;

            let c = `Rebug/Cobra D-REX 4.75.3 [DEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.75.3%20D-REX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.75]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }


        if(ps === '4.76'){

            let a = `Habib Cobra 7.2 4.76 v1.0 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Habib%20Cobra%207.2%204.76%201.00%20CEX.rar`;

            let b = `Rebug Cobra REX 4.76.1 [CEX/DEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.76.1%20REX.rar`;

            let c = `Rebug Cobra D-REX 4.76.1 [DEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.76.1%20D-REX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.76]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }












        if(ps === '4.78'){

            let a = `Rebug Cobra REX 4.78.2 [CEX/DEX/Cobra]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.78.2%20REX.rar`;

            let b = `Rebug Cobra D-REX 4.78.2 [DEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.78.2%20D-REX.rar`;

            let c = `Habib 4.78 Cobra 7.3 [CEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW%20Habib%20Cobra%204.78%20CEX.rar`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.78]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }








        if(ps === '4.80'){

            let a = `Rebug Cobra REX 4.80.1 [CEX/DEX/Cobra]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.80.1%20REX.rar`;

            let b = `Rebug Cobra D-REX 4.80.1 [DEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW%20Rebug%204.80.1%20D-REX.rar`;

          



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.80]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        

















        if(ps === '4.81'){

            let a = `Darknet 4.81 v1.00 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW_Darknet_4.81_v1.00_CEX.rar`;

            let b = `Darknet Cobra 4.81 v1.00 [CEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW_Darknet_Cobra_7.3_4.81_v1.00_CEX.rar`;

            let c = `Ferrox Cobra 7.3 v1.01 [CEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW_Ferrox_Cobra_7.3_v1.01_CEX.rar`;

            let d = `CFW Habib Cobra 7.5 4.81 v1.02 [CEX/Cobra]`;
            let dd = `https://www.ps3tuto.com/CFW/CFW_Habib_Cobra_7.5_4.81_v1.02_CEX.rar`;

            let e = `CFW Rebug Cobra 4.81.2 [CEX/DEX/Cobra]`;
            let ee = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.81.2_REX.rar`;

            let f = `CFW Rebug Cobra 4.81.2 [DEX/Cobra]`;
            let ff = `https://www.ps3tuto.com/CFW/CFW%20Rogero%20%203.55%20v2%20DEX.rar`;

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.81]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))
            .addField(f, (`[Clique ici](${ff})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }
























        if(ps === '4.82'){

            let a = `CFW Ferrox 4.82 1.01 [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW_Ferrox_4.82_v1.01_CEX.rar`;

            let b = `CFW Ferrox 4.82 Cobra 7.5 1.01 [CEX/Cobra]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW_Ferrox_4.82_Cobra_7.5_v1.01_CEX.rar`;

            let c = `CFW Rebug 4.82.1 Lite CEX [CEX]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.82.1_Lite_CEX.rar`;

            let d = `CFW Rebug 4.82.2 D-REX [DEX/Cobra]`;
            let dd = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.82.2_D-REX.rar`;

            let e = `CFW Rebug 4.82.2 REX [CEX/DEX/Cobra]`;
            let ee = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.82.2_REX.rar`;

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.82]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.83'){

            let a = `Ferrox 4.83 Cobra 7.55 [CEX/Cobra]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW_Ferrox_4.83_Cobra_7.5_v1.00_CEX.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.82]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }








        if(ps === '4.84'){

            let a = `Ferrox 4.84 Cobra [CEX/Cobra]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW_Ferrox_4.84_Cobra_CEX.rar`;

            let b = `CFW Rebug 4.84.1 Lite CEX [CEX]`;
            let bb = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.84.1_Lite_CEX.rar`;

            let c = `CFW Starbuged 4.84.3 Cobra 8.01 [CEX/Cobra]`;
            let cc = `https://www.ps3tuto.com/CFW/CFW_Starbuged_4.84.3_CEX_Cobra_8.01.rar`;

            let d = `CFW Rebug 4.84.2 REX [CEX/DEX/Cobra]`;
            let dd = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.84.2_REX.rar`;

            let e = `CFW Rebug 4.84.2 D-REX [DEX/Cobra]`;
            let ee = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.84.2_D-REX.rar`;

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.84]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }









        if(ps === '4.85'){

            let a = `Rebug 4.85.1 Lite CEX [CEX]`;
            let aa = `https://www.ps3tuto.com/CFW/CFW_Rebug_4.85.1_Lite_CEX.zip`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.85]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.86'){

            let a = `REBUG LITE Cobra 8.2 CEX [CEX/Cobra]`;
            let aa = `https://www.cybermodding.it/HBStore/CFW/REBUG/4.86/Rebug_Lite_4.86.1_CEX_cobra_8.2/PS3~dev_usb000.zip`;

            let b = `REBUG LITE Cobra 8.2 [CEX/Cobra/noBD/noBT/RSOD]`;
            let bb = `https://www.cybermodding.it/HBStore/CFW/REBUG/4.86/Rebug_Lite_4.86.1_CEX_cobra_8.2_brokenps3/EVERYTHING_NOBD_NOBT_RSOD/PS3~dev_usb000.zip`;

            let c = `REBUG LITE 4.86.1 Cobra 8.2 [CEX/Cobra/noBD]`;
            let cc = `https://www.cybermodding.it/HBStore/CFW/REBUG/4.86/Rebug_Lite_4.86.1_CEX_cobra_8.2_brokenps3/NOBD/PS3~dev_usb000.zip`;

            let d = `REBUG LITE 4.86.1 Cobra 8.2 CEX noBT [CEX/Cobra/npBT]`;
            let dd = `https://www.cybermodding.it/HBStore/CFW/REBUG/4.86/Rebug_Lite_4.86.1_CEX_cobra_8.2_brokenps3/NOBT/PS3~dev_usb000.zip`;

            let e = `REBUG LITE 4.86.1 Cobra 8.2 [CEX/Cobra/RSOD]`;
            let ee = `https://www.cybermodding.it/HBStore/CFW/REBUG/4.86/Rebug_Lite_4.86.1_CEX_cobra_8.2_brokenps3/RSOD/PS3~dev_usb000.zip`;

            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.86.1]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.87'){

            let a = `Ferrox 4.87 [CEX/Cobra] [MEGA]`;
            let aa = `https://mega.nz/file/qtlVEAJa#lCzHzgzU5I1m21UcscAkeB5Mujl-dS10lxSCQ8ekh9M`;

            let b = `Evilnat 4.87.2 [CEX/Cobra] [MEGA]`;
            let bb = `https://mega.nz/file/gAMWSL5D#LULRb25cQ2N7I0un1tiuPCpUONeOh1nJZaYDTDkpDIo`;



            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.87]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === '4.88'){

            let a = `CFW EVILNAT 4.88 COBRA 8.3 [CEX] [MEGA]`;
            let aa = `https://mega.nz/file/tZtUADaL#mNpEpYvzlUjnNB4SJzB4T-gBs_OW67NjC3cjKffakYU`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[4.88]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }





        //
 
    }
}
