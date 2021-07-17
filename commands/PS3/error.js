const Discord = require('discord.js');

module.exports = {
    name: "erreur",

    run: async(client, message, args) => {
      let ps = args.join(" ");
        if (ps === null)return message.channel.send(`Veuillez définir une erreur.`)

        if(ps === '8013030'){

           
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${args.join(" ")}`)
            .setDescription(`Erreur système - échec de mise à jour.`)
            .setTimestamp() 
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setColor("#000c63"))


        }

        if(ps === '80010001'){

           
          message.channel.send(new Discord.MessageEmbed()
          .setTitle(`${args.join(" ")}`)
          .setDescription(`Erreur majeure, lecture du jeu impossible (disque détérioré).`)
          .setTimestamp() 
          .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
          .setColor("#000c63"))


      }

      if(ps === '80010009'){

           
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${args.join(" ")}`)
        .setDescription(`Erreur de synchronisation d'un matériel 'bluetooth'.`)
        .setTimestamp() 
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setColor("#000c63"))


    }

    if(ps === '80010014'){

           
      message.channel.send(new Discord.MessageEmbed()
      .setTitle(`${args.join(" ")}`)
      .setDescription(`Échec de téléchargement sur le psn (achat d'un jeu), réessayer le téléchargement.`)
      .setTimestamp() 
      .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
      .setColor("#000c63"))


  }

  if(ps === '80010017'){

           
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`${args.join(" ")}`)
    .setDescription(`'Jeu blu-ray' illisible.`)
    .setTimestamp() 
    .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
    .setColor("#000c63"))


}

if(ps === '80010036'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Un problème relatif au disque dur de votre système PS3 est survenu. Passez en mode sans échec et sélectionnez [Restaurer le système de fichiers].Si le problème persiste, reformatez le disque dur de votre PS3. Remarque : cela supprimera toutes les données de votre disque dur.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80010510'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Jeu installé sur le disque dur impossible à lancer.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80010514'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de disque dur, relancer la ps3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80010516'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de lecture d'un jeu ps1, éjecter le jeu et réessayer.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002291A'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Votre système PS3 ne parvient pas à lire un Blu-ray Disc. Éjectez le disque et réinsérez-le, après vous être assuré qu'il est propre et exempt de toute rayure. Si le problème persiste, essayez de charger trois autres disques différents minimum. Si aucune erreur ne se produit, le premier disque est peut-être endommagé et il vous faudra éventuellement le remplacer.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '710102'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur DNS, le serveur DNS n'est plus valable.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80023017'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Playstation Store est en cours de maintenance.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002315A'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Vous avez atteint le nombre maximum de comptes Sony Entertainment Network pouvant être associés à cette carte bancaire. Le PlayStation Network ne permet d'associer une carte bancaire qu'à un maximum de cinq comptes.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80029020'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Le délai de connexion à Internet de votre système PS3 a expiré. Si vous utilisez une connexion sans fil, le système PS3 n'a pas pu détecter le point d'accès.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80029024'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Obtention d'une adresse IP (Internet Protocol ) impossible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80029513'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Violation de la législation des droits d'auteur, jeu non original.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80029564'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Installation d'un jeu téléchargé impossible Vous ne parvenez pas à installer du contenu acheté sur le PlayStation Store. Veuillez supprimer le fichier, puis le télécharger à nouveau.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80029945'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Lecture d'un film 'blu-ray' impossible (s'agissant certainement d'une copie)`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80030920'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Fichier corrompu.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80031150'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de sauvegarde des paramètres système, possibilité d'un écran bleu restaurer les paramètres par défaut.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80031601'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur durant la création d'un compte.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8003051E'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Sauvegarde d'une partie impossible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80130182'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de connexion, conflit d'adresse IP.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80130183'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur d'inscription au playstation network, inscription effectuée sur le site PSN via le pc, mais non confirmée sur la PS3 ou non validée par le message électronique de confirmation.(cliquez sur le lien reçu).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80130203'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Ps3 connectée à internet, mais pas au Playstation Network,ouvrir les ports de votre 'box' TCP 80,443,5223 et UDP 3478,3479,3658.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}


if(ps === '80410418'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de DNS (Domaine Name System).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710016'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Playstation Network indisponible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710092'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Déconnexion au Playstation Network, cause : perte de connexion (souvent le wifi).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8001000B'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de clé wifi : vérifier le format, WEP ou WAP.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710101'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur lors de la connexion.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710102'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Connexion impossible avec la 'box' adresse IP (Internet Protocol) incorrecte.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710541'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Temps de connexion expiré.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710723'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de ports non ouverts.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '81019002'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Copie d'une sauvegarde impossible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8001050D'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Lancement du jeu impossible (disque sale ou rayé).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80022A07'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur chargement des trophées.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80028EA1'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur DNS,(Domaine Name System) en essayant de tester la connexion dans Paramètres connexion Internet (connexion sans fil).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80028EA5'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Connexion au Playstation Network impossible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80028EA6'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de connexion, relancer la ps3 et la box.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80028F10'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur d'affichage, mettre en automatique les paramètres d'affichage.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80028F17'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Lecture d'un jeu ps2 impossible, relancer la ps3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80028F18'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Lecture d'un jeu ps2 impossible, disque non supporté (console non compatible).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80029C68'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Données corrompues d'un fichier (venant d'un support externe).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A10D'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Ajout d'un ami impossible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A231'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Compte suspendu, banni ou supprimé. (PS home).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A203'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Impossible de se connecter au PSN (playstation network en maintenance).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A401'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur d'envoi de message avec photo.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A4A6'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Chargement d'un jeu pour jouer en ligne impossible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A515'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de connexion.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A548'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Connexion wifi instable (perte de connexion).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A705'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Connexion au serveur impossible (vérifier les ports).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002A71A'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de NAT (Network Adress Translation) connexion possible aux serveurs mais impossible de rejoindre ou de créer une partie.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002AD23'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de connexion.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002AE21'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La démo ou le fichier sont corrompus.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002B241'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Connexion audio DVI défaillante.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F147'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Mise à jour du firmware impossible, désactiver UPNP (Universal Plug And Play), Proxy, les réactiver après mise à jour.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F994'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de mise à jour, Playstation Network bloqué suite à un trop grand nombre de demandes, essayer plus tard.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F997'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Échec de l'installation d'une mise à jour par support externe (fichier corrompu).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F1F0'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Un problème relatif au réseau local sans fil (WLAN) et/ou à la fonctionnalité Bluetooth de votre système PS3 est survenu.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F147'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F149'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F165'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F176'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F310'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F313'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F318'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`La mise jour du logiciel système ne peut s'effectuer sur votre système PS3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8002F22F'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Le disque dur de votre PS3 ne fonctionne pas correctement.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8013013D'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de connexion, signal du wifi trop faible ou erreur de SSID (Service Set IDentifier).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8013013E'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de clé WEP, vérifier la configuration de la box.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8013030F'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur SSID (Service Set Identifier), sa diffusion est désactivée.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8013031B'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur liée aux paramètres wifi. Votre point d'accès ne prend pas en charge le WPA. Vérifiez que les paramètres de sécurité du routeur sont corrects.Assurez-vous que ces paramètres ont bien été appliqués à votre PS3 lorsque vous configurez la connexion Internet.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '807101FF'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de DNS (Domaine Name System).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8071040C'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Erreur de connexion au serveur (recommencer ,rebooter la ps3 ).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '8071053D'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Connexion au Playstation Network impossible (maintenance).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710A06'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Vous rencontrez un problème avec votre système PlayStation 3.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710B23'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Playstation Network indisponible.`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710B36'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`Playstation encombrée (réessayer plus tard).`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}

if(ps === '80710D23'){

           
  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`${args.join(" ")}`)
  .setDescription(`PSN bloqué suite à un nombre de demandes trop importante (maps cod black ops first strike.)`)
  .setTimestamp() 
  .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
  .setColor("#000c63"))


}



    
    
    }}