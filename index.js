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

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const arrayOfStatuses = ['M4LC0LM je gay', 'Dudlica ga dudla', 'PRO TIP: Ne igrajte wingman s infitorom', 'Jel vama keza krindz', 'Ico kid 011', 'Marusa gleda winxice',
                         'Krtina'];

client.on('ready', () => {
  console.log(`Bot is online!`);
  client.user.setPresence({
    activities: [{
      name: arrayOfStatuses[Math.floor(Math.random()*arrayOfStatuses.length)]
    }]
  });
});

client.on('messageCreate', async message => {
  // Define Command Components //
  const args = message.content.slice(config.pre).split(/ +/);
  const command = args.shift().toLowerCase()

  if (command == 'help') {
      client.commands.get('help').execute(message)
  }
})

client.login(process.env.TOKEN);