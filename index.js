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

const arrayOfStatus = ['M cetiri L C nula L M',
                        'Dudlic ga dudla',
                        'PRO TIP: Ne igrajte wingman s infitorom',
                        'Jel vama keza krindz', 
                        'Ico kid 011',
                        'Marusa gleda winxice',
                        'Krtina',
                        'DeCkO dEbiL'];

let arrayOfStatus2 = ['online', 'dnd', 'idle'];
let count = 0;

client.on('ready', () => {
  console.log(`Bot is online!`);
  setInterval(() => {
    client.user.setPresence({ activities: [{
       name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)],
       type: 'PLAYING'
      }]
    })
  }, 5000);
    function cycleArray() {
      let status = arrayOfStatus2[count];
      client.user.setStatus(status);
      count++;

      if (count === arrayOfStatus2.length)
        count = 0;
    }
    setInterval(cycleArray, 5000);
});

client.on('messageCreate', async message => {
  // Define Command Components //
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'help':
      client.commands.get('help').execute(message);
      break;
    case 'mrs':
      client.commands.get('mrs').execute(message);
      break;
    case 'debelsi':
      client.commands.get('debelsi').execute(message);
      break;
    case 'ping':
      client.commands.get('ping').execute(message);
      break;
    case 'kletva':
      client.commands.get('kletva').execute(message);
      break;
    case 'antikletva':
      client.commands.get('antikletva').execute(message);

  }
})

const forbiddenWords = ['kurac', 'picka', 'pička', 'picko', 'pičko', 'pusi kurac', 'jebi se', 'majku ti jebem', 'jebem ti majku', 'mrs u kurac', 'jeben ti majku',
                        'jeben ti mater', 'jebem ti mater', 'kurcina', 'kurčina', 'jeb'];

client.on('messageCreate', (msg) => {
  for (var i = 0; i < forbiddenWords.length; i++) {
  if (msg.content.toLowerCase().includes(forbiddenWords[i])) {

    //msg.delete();
    //msg.channel.send(`Ejjjj, nema psovanja 😠 <@${msg.author.id}>`);
    break;
  }
}
})

client.login(process.env.TOKEN);