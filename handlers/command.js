const { readdirSync } = require("fs");

const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Commandes", "Status");

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, 'Oui');
            } else {
                table.addRow(file, `Non  -> Erreur.`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());
    console.log('\n\x1b[32m%s\x1b[0m', `            $[INFO]: Ce bot a été crée par Cyber-Network : https://discord.gg/4PDN8kauVX`); 
}
