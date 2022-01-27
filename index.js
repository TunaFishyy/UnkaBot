require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});
const fs = require('fs');
const { type } = require('os');
const config = require('./config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const arrayOfStatus = ['M4LC0LM je gay', 'Dudlic ga dudla', 'PRO TIP: Ne igrajte wingman s infitorom', 'Jel vama keza krindz', 'Ico kid 011', 'Marusa gleda winxice',
                         'Krtina'];

client.on('ready', () => {
  console.log(`Bot is online!`);
  setInterval(() => {
    client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }] })
}, 5000);
});

client.on('messageCreate', async message => {
  // Define Command Components //
  if (!message.content.startsWith(config.prefix) || message.author.b) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'help':
      client.commands.get('help').execute(message);
      break;
    case 'mrs':
      client.commands.get('mrs').execute(message);
  }
})

client.login(process.env.TOKEN);