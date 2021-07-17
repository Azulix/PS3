const Discord = require('discord.js');

module.exports = {
    name: "pkg",

    async run (client, message, args) {

        let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir un pkg.`)



        if(ps === 'coldboot-installer'){

            let a = `coldboot-installer [3.55]`;
            let aa = `https://www.ps3tuto.com/homebrews/Coldboot_Installer.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[COLDBOOT-INSTALLER]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'eid_dumper'){

            let a = `eid_dumper [3.55]`;
            let aa = `https://www.ps3tuto.com/homebrews/eEID_RKDumper.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[EID_DUMPER]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'fsm-tool'){

            let a = `fsm-tool [3.55]`;
            let aa = `https://www.ps3tuto.com/homebrews/FactoryServiceMode_Tool_v0.2.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[FSM-TOOL]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'memdump'){

            let a = `memdump [3.55]`;
            let aa = `https://www.ps3tuto.com/homebrews/Memdump_0.01.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[MEMDUMP]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'toggle-qa'){

            let a = `toggle-qa [3.55]`;
            let aa = `https://www.ps3tuto.com/homebrews/Toggle_QA.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[TOGGLE-QA]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'eid_root_key'){

            let a = `eid_root_key [4.xx]`;
            let aa = `https://www.ps3tuto.com/homebrews/EID_Root_key_Dumper_4.xx.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[EID ROOT_KEY DUMPER]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'flappy-bird'){

            let a = `flappy-bird [4.xx]`;
            let aa = `https://www.ps3tuto.com/homebrews/Flappy_Bird_v0.01.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[FLAPPY BIRD]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'gamesonic'){

            let a = `Gamesonic Control Fan Utility [4.xx]`;
            let aa = `https://www.ps3tuto.com/homebrews/Control_Fan_Utility_4.82.rar`;

            let b = `Gamesonic Manager [4.xx]`;
            let bb = `https://www.ps3tuto.com/homebrews/Gamesonic_Manager_v3.96.zip`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[GAMESONIC]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'idpset'){

            let a = `IDPSet [4.xx]`;
            let aa = `https://www.ps3tuto.com/homebrews/IDPSet_v0.90.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[IDPSet]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

                if(ps === 'multiman'){

            let a = `Multiman [4.78.03]`;
            let aa = `https://www.ps3tuto.com/homebrews/Multiman_v04.78.03.rar`;

            let b = `Multiman [4.80.00]`;
            let bb = `https://www.ps3tuto.com/homebrews/Multiman_v04.80.00.rar`;

            let c = `Multiman [4.81.02]`;
            let cc = `https://www.ps3tuto.com/homebrews/Multiman_v04.81.02.rar`;

            let d = `Multiman [4.82.00]`;
            let dd = `https://www.ps3tuto.com/homebrews/Multiman_v04.82.00.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[MULTIMAN]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))


            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'psninja'){

            let a = `PS Ninja [4.xx]`;
            let aa = `https://www.ps3tuto.com/homebrews/PS_Ninja.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[PS NINJA]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }

        if(ps === 'psnpatch'){

            let a = `PSN Patch [4.xx]`;
            let aa = `https://www.ps3tuto.com/homebrews/PS_Ninja.rar`;


            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[PS Patch]-[4.xx]')
            .setDescription(``)
            .addField(a, (`[Clique ici](${aa})`))

            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }




        if(ps === 'sen-enabler'){
			
	    let xzy = `[SEN Enabler] [v6.2.7]`;
	    let xzya = `https://store.brewology.com/get/homebrew.php?id=283&fid=2259`;

            let a = `[SEN Enabler] [v6.2.6]`;
            let aa = `https://store.brewology.com/get/homebrew.php?id=283&fid=2249`;

            let b = `[SEN Enabler] [v6.2.5]`;
            let bb = `https://store.brewology.com/get/homebrew.php?id=283&fid=2219`;

            let c = `[SEN Enabler] [v6.2.4beta]`;
            let cc = `https://store.brewology.com/get/homebrew.php?id=283&fid=2211`;

            let d = `[SEN Enabler] [v6.2.3]`;
            let dd = `https://store.brewology.com/get/homebrew.php?id=283&fid=2193`;

            let e = `[SEN Enabler] [v6.2.2]`;
            let ee = `https://store.brewology.com/get/homebrew.php?id=283&fid=1874`;

            let f = `[SEN Enabler] [v6.2.1]`;
            let ff = `https://store.brewology.com/get/homebrew.php?id=283&fid=2100`;

            let g = `[SEN Enabler] [v6.2.0]`;
            let gg = `https://store.brewology.com/get/homebrew.php?id=283&fid=2157`;

            let h = `[SEN Enabler] [v6.0.9]`;
            let hh = `https://store.brewology.com/get/homebrew.php?id=283&fid=2155`;

            let i = `[SEN Enabler] [v6.0.8]`;
            let ii = `https://store.brewology.com/get/homebrew.php?id=283&fid=2145`;

            let j = `[SEN Enabler] [v6.0.7]`;
            let jj = `https://store.brewology.com/get/homebrew.php?id=283&fid=2135`;

            let k = `[SEN Enabler] [v6.0.5 Beta 3]`;
            let kk = `https://store.brewology.com/get/homebrew.php?id=283&fid=2102`;

            let l = `[SEN Enabler] [v6.0.5 Beta 2]`;
            let ll = `https://store.brewology.com/get/homebrew.php?id=283&fid=2101`;

            let m = `[SEN Enabler] [v6.0.4]`;
            let mm = `https://store.brewology.com/get/homebrew.php?id=283&fid=2064`;

            let n = `[SEN Enabler - PLUGIN 2.3] [v6.0.4]`;
            let nn = `https://store.brewology.com/get/homebrew.php?id=283&fid=2065`;

            let o = `[SEN Enabler - PLUGIN 2.2] [v6.0.3]`;
            let oo = `https://store.brewology.com/get/homebrew.php?id=283&fid=2017`;

            let aze = `[SEN Enabler] [v6.0.3]`;
            let azert = `https://store.brewology.com/get/homebrew.php?id=283&fid=2016`;

            let p = `[SEN Enabler] [v6.0.2]`;
            let pp = `https://store.brewology.com/get/homebrew.php?id=283&fid=1992`;

            let q = `[SEN Enabler - PLUGIN 2.1] [v6.0.2]`;
            let qq = `https://store.brewology.com/get/homebrew.php?id=283&fid=1993`;

            let r = `[SEN Enabler] [v6.0.1]`;
            let rr = `https://store.brewology.com/get/homebrew.php?id=283&fid=1979`;

            let s = `[SEN Enabler] [v5.9.3]`;
            let ss = `https://store.brewology.com/get/homebrew.php?id=283&fid=1956`;

            let t = `[SEN Enabler - PLUGIN 2.0] [v5.9.3]`;
            let tt = `https://store.brewology.com/get/homebrew.php?id=283&fid=1955`;

            let u = `[SEN Enabler] [v5.9.2]`;
            let uu = `https://store.brewology.com/get/homebrew.php?id=283&fid=1945`;

            let v = `[SEN Enabler - PLUGIN 1.9] [v5.9.2]`;
            let vv = `https://store.brewology.com/get/homebrew.php?id=283&fid=1946`;

            let w = `[SEN Enabler] [v5.9.1]`;
            let ww = `https://store.brewology.com/get/homebrew.php?id=283&fid=1927`;

            let x = `[SEN Enabler] v5.9.0]`;
            let xx = `https://store.brewology.com/get/homebrew.php?id=283&fid=1915`;

            let y = `[SEN Enabler - PLUGIN 1.8] [v5.9.0]`;
            let yy = `https://store.brewology.com/get/homebrew.php?id=283&fid=1916`;

            let z = `[SEN Enabler] [v5.8.2]`;
            let zz = `https://store.brewology.com/get/homebrew.php?id=283&fid=1890`;

            let za = `[SEN Enabler] [v5.8.1]`;
            let zaa = `https://store.brewology.com/get/homebrew.php?id=283&fid=1886`;
            
            let zb = `[SEN Enabler - PLUGIN 1.5] [v5.8.1]`;
            let zbb = `https://store.brewology.com/get/homebrew.php?id=283&fid=1885`;

            let zc = `[SEN Enabler] [v5.8.0]`;
            let zcc = `https://store.brewology.com/get/homebrew.php?id=283&fid=1842`;

            let zd = `[SEN Enabler - PLUGIN] [v5.8.0]`;
            let zdd = `https://store.brewology.com/get/homebrew.php?id=283&fid=1843`;

            let ze = `[SEN Enabler] [v5.7.4]`;
            let zee = `https://store.brewology.com/get/homebrew.php?id=283&fid=1814`;
			









            message.channel.send(new Discord.MessageEmbed()
            .setTitle('[SEN-ENABLER]-[4.xx]')
            .setDescription(``)
	    .addField(xzy, (`[Clique ici](${xzya})`))
            .addField(a, (`[Clique ici](${aa})`))
            .addField(b, (`[Clique ici](${bb})`))
            .addField(c, (`[Clique ici](${cc})`))
            .addField(d, (`[Clique ici](${dd})`))
            .addField(e, (`[Clique ici](${ee})`))
            .addField(f, (`[Clique ici](${ff})`))
            .addField(g, (`[Clique ici](${gg})`))
            .addField(h, (`[Clique ici](${hh})`))
            .addField(i, (`[Clique ici](${ii})`))
            .addField(j, (`[Clique ici](${jj})`))
            .addField(k, (`[Clique ici](${kk})`))
            .addField(l, (`[Clique ici](${ll})`))
            .addField(m, (`[Clique ici](${mm})`))
            .addField(n, (`[Clique ici](${nn})`))
            .addField(o, (`[Clique ici](${oo})`))
            .addField(aze, (`[Clique ici](${azert})`))
            .addField(p, (`[Clique ici](${pp})`))
            .addField(q, (`[Clique ici](${qq})`))
            .addField(r, (`[Clique ici](${rr})`))
            .addField(s, (`[Clique ici](${ss})`))
            .addField(t, (`[Clique ici](${tt})`))
            .addField(u, (`[Clique ici](${uu})`))
            .addField(v, (`[Clique ici](${vv})`))
            .addField(w, (`[Clique ici](${ww})`))
            .addField(x, (`[Clique ici](${xx})`))
            .addField(y, (`[Clique ici](${yy})`))
            .addField(z, (`[Clique ici](${zz})`))
            .addField(za, (`[Clique ici](${zaa})`))
            .addField(zb, (`[Clique ici](${zbb})`))
            .addField(zc, (`[Clique ici](${zcc})`))
            .addField(zd, (`[Clique ici](${zdd})`))
            .addField(ze, (`[Clique ici](${zee})`))



            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))

        }


    }}
    