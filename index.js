require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
  console.log('Bot is on.');
})

client.on('messageCreate', async message => {
  if (!message.content.startsWith(config.prefix) || !message.guild || message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client.message.args);
})

client.login(process.env.TOKEN);