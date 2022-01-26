import DiscordJS, { Channel, Intents, Message, MessageEmbed } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
    ]
})

client.on('ready', () => {
    console.log('Bot se ukljucio!'),
    client.user.setPresence({
        status: 'online',
        activities: [{
            name: 'Unka',
            type: 'WATCHING'
        }]
    });
});

const images = ['https://www.imgur.com/He1yFhG.png', 'https://www.imgur.com/chiIGfLb.png', 'https://www.imgur.com/nP45XGvb.png',
                'https://www.imgur.com/TkzGmjJb.png', 'https://www.imgur.com/uqJ2ci5b.png', 'https://www.imgur.com/HsPuvfvb.png'];

var prefix = '.'

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.toLowerCase() === prefix+'mrs') { 
        msg.reply('Ma mrs ti')
    }
    else if (msg.content.toLowerCase() === prefix+'debelsi') {
        const embed = new MessageEmbed()
    .setColor('AQUA')
    .setTitle('Keva ti debela')
    .setImage(images[Math.floor(Math.random()*images.length)]);
        msg.reply({ embeds: [embed] });
    }
    else if (msg.content.toLowerCase() === prefix+'help') {
        const help = new MessageEmbed()
    .setColor('GOLD')
    .setTitle('Help')
    .setDescription('Prefix: **.**\nKomande: **debelsi**, **mrs**')
        msg.reply({ embeds: [help] });
    }
})

client.login(process.env.TOKEN)