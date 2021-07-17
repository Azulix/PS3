const { prefix, token, version, owner} = require("./config.json");
const  discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true 
});
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
["command",].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.cmd = require(`./handlers/command`)
client.version = (version)
client.own = (owner)
client.db = require('./db.json')

client.on('message', async message => {
  if (message.guild){
    if (message.type !== 'DEFAULT' || message.author.bot) return
}

    if (!message.member)
    message.member = await message.guild.fetchMember(message);
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args, prefix);
  }); 







  client.login(token);