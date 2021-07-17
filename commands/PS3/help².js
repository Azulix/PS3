const Discord = require('discord.js');
config = require(`../../config.json`)

module.exports = {
    name: "info",

    async run (client, message, args) {
        let prefixrep = config.prefix
        let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir une version.`)

        if(ps === 'cfw'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP CFW]')
                .setDescription(`
    
                **CFW PS3 :**
    
                \`${prefixrep}cfw 3.55\`,\`${prefixrep}cfw 4.21\`,\`${prefixrep}cfw 4.30\`,\`${prefixrep}cfw 4.40\`,\`${prefixrep}cfw 4.41\`,\`${prefixrep}cfw 4.46\`,\`${prefixrep}cfw 4.50\`,\`${prefixrep}cfw 4.53\`,\`${prefixrep}cfw 4.55\`,\`${prefixrep}cfw 4.60\`,\`${prefixrep}cfw 4.65\`,\`${prefixrep}cfw 4.66\`,\`${prefixrep}cfw 4.70\`,\`${prefixrep}cfw 4.75\`,\`${prefixrep}cfw 4.76\`,\`${prefixrep}cfw 4.78\`,\`${prefixrep}cfw 4.80\`,\`${prefixrep}cfw 4.81\`,\`${prefixrep}cfw 4.82\`,\`${prefixrep}cfw 4.83\`,\`${prefixrep}cfw 4.84\`,\`${prefixrep}cfw 4.85\`,\`${prefixrep}cfw 4.86\`,\`${prefixrep}cfw 4.87\`,\`${prefixrep}cfw 4.88\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'hfw'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP HFW]')
                .setDescription(`
    
                **HFW PS3 :**

                \`${prefixrep}hfw 4.84\`,\`${prefixrep}hfw 4.85\`,\`${prefixrep}hfw 4.86\`,\`${prefixrep}hfw 4.87\`,\`${prefixrep}hfw 4.88\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'maj'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP MAJ]')
                .setDescription(`
    
                **Autre MAJ :**

                \`${prefixrep}minvercheck\`,\`${prefixrep}downgrader-3.55-dex\`,\`${prefixrep}downgrader-9.99\`,\`${prefixrep}rogero-downgrader-3.55\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'pkg-3.55'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP PKG 3.55]')
                .setDescription(`
    
                **Homebrews 3.55 :**

                \`${prefixrep}pkg coldboot-installer\`,\`${prefixrep}pkg eid_dumper\`,\`${prefixrep}pkg fsm-tool\`,\`${prefixrep}pkg memdump\`,\`${prefixrep}pkg toggle-qa\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'pkg'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP PKG]')
                .setDescription(`
    
                **Homebrews 4.xx :**

            \`${prefixrep}pkg eid_root_key\`,\`${prefixrep}pkg flappy-bird\`,\`${prefixrep}pkg gamesonic\`,\`${prefixrep}pkg idpset\`,\`${prefixrep}pkg multiman\`,\`${prefixrep}pkg psninja\`,\`${prefixrep}pkg psnpatch\`,\`${prefixrep}pkg sen-enabler\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }


        if(ps === 'autre'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP AUTRE]')
                .setDescription(`
    
                **Autre :**

                \`${prefixrep}invite\`,\`${prefixrep}prefix\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }



        if(ps === 'cid'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP CID]')
                .setDescription(`
    
                **CID**
            
            \`${prefixrep}cid\`,\`${prefixrep}add-cid\`,\`${prefixrep}del-cid\`,\`${prefixrep}op\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'erreur'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP ERREUR]')
                .setDescription(`
    
                **ERREUR**
            
            \`${prefixrep}erreur 710102\`,\`${prefixrep}erreur 8013030\`,\`${prefixrep}erreur 80010001\`,\`${prefixrep}erreur 80010009\`,\`${prefixrep}erreur 80010014\`,\`${prefixrep}erreur 80010017\`,\`${prefixrep}erreur 80010036\`,\`${prefixrep}erreur 80010510\`,\`${prefixrep}erreur 80010514\`,\`${prefixrep}erreur 80010516\`,\`${prefixrep}erreur 8002291A\`,\`${prefixrep}erreur 80023017\`,\`${prefixrep}erreur 8002315A\`,\`${prefixrep}erreur 80029020\`,\`${prefixrep}erreur 80029024\`,\`${prefixrep}erreur 80029513\`,\`${prefixrep}erreur 80029564\`,\`${prefixrep}erreur 80029945\`,\`${prefixrep}erreur 80030920\`,\`${prefixrep}erreur 80031150\`,\`${prefixrep}erreur 80031601\`,\`${prefixrep}erreur 8003051E\`,\`${prefixrep}erreur 80130182\`,\`${prefixrep}erreur 80130183\`,\`${prefixrep}erreur 80130203\`,\`${prefixrep}erreur 8013030\`,\`${prefixrep}erreur 80410418\`,\`${prefixrep}erreur 80710016\`,\`${prefixrep}erreur 80710092\`,\`${prefixrep}erreur 8001000B\`,\`${prefixrep}erreur 80710101\`,\`${prefixrep}erreur 80710102\`,\`${prefixrep}erreur 80710541\`,\`${prefixrep}erreur 80710723\`,\`${prefixrep}erreur 81019002\`,\`${prefixrep}erreur 8001050D\`,\`${prefixrep}erreur 80022A07\`,\`${prefixrep}erreur 80028EA1\`,\`${prefixrep}erreur 80028EA5\`,\`${prefixrep}erreur 80028EA6\`,\`${prefixrep}erreur 80028F10\`,\`${prefixrep}erreur 80028F17\`,\`${prefixrep}erreur 80028F18\`,\`${prefixrep}erreur 80029C68\`,\`${prefixrep}erreur 8002A10D\`,\`${prefixrep}erreur 8002A231\`,\`${prefixrep}erreur 8002A203\`,\`${prefixrep}erreur 8002A401\`,\`${prefixrep}erreur 8002A4A6\`,\`${prefixrep}erreur 8002A515\`,\`${prefixrep}erreur 8002A548\`,\`${prefixrep}erreur 8002A705\`,\`${prefixrep}erreur 8002A71A\`,\`${prefixrep}erreur 8002AD23\`,\`${prefixrep}erreur 8002AE21\`,\`${prefixrep}erreur 8002B241\`,\`${prefixrep}erreur 8002f147\`,\`${prefixrep}erreur 8002F994\`,\`${prefixrep}erreur 8002F997\`,\`${prefixrep}erreur 8002F1F0\`,\`${prefixrep}erreur 8002F147\`,\`${prefixrep}erreur 8002F149\`,\`${prefixrep}erreur 8002F165\`,\`${prefixrep}erreur 8002F176\`,\`${prefixrep}erreur 8002F310\`,\`${prefixrep}erreur 8002F313\`,\`${prefixrep}erreur 8002F318\`,\`${prefixrep}erreur 8002F22F\`,\`${prefixrep}erreur 8013013D\`,\`${prefixrep}erreur 8013013E\`,\`${prefixrep}erreur 8013030F\`,\`${prefixrep}erreur 8013031B\`,\`${prefixrep}erreur 807101FF\`,\`${prefixrep}erreur 8071040C\`,\`${prefixrep}erreur 8071053D\`,\`${prefixrep}erreur 80710A06\`,\`${prefixrep}erreur 80710B23\`,\`${prefixrep}erreur 80710B36\`,\`${prefixrep}erreur 80710D23\`
                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'perso'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP PERSO]')
                .setDescription(`
    
                **PERSO :**

                \`${prefixrep}perso dex-mmd\`,\`${prefixrep}perso cobraland\`,\`${prefixrep}perso ccapi-reyz\`
                

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        if(ps === 'mode'){


    
    
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('[HELP SPRX-HEN]')
                .setDescription(`
    
                **MODE MENU :**

                \`${prefixrep}mode weareghosts-gta5\`,\`${prefixrep}mode galerium-gta5\`,\`${prefixrep}mode salfety-gta5\`,\`${prefixrep}mode reborn-gta5\`,\`${prefixrep}mode nightmare-mw2\`,\`${prefixrep}mode insidious-mw2\`,\`${prefixrep}mode infinity-mw2\`,\`${prefixrep}mode crystallized-mw3\`,\`${prefixrep}mode nay-mw3\`,\`${prefixrep}mode infinity-mw3\`

                `)
                .setTimestamp()
                .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
                .setColor("#000c63"))

        }

        
    
    
    
    }}