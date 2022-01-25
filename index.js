import DiscordJS, { Channel, Intents, Message, MessageEmbed } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot se ukljucio!')
})

const images = ['https://i.imgur.com/He1yFhG.png', 'https://i.imgur.com/QMJuIcDb.png', 'https://i.imgur.com/chiIGfLb.png', 'https://i.imgur.com/nP45XGvb.png',
                'https://i.imgur.com/TkzGmjJb.png', 'https://i.imgur.com/uqJ2ci5b.png', 'https://i.imgur.com/fK7NYeNb.png', 'https://i.imgur.com/HsPuvfvb.png'];

var prefix = '.'

const embed = new MessageEmbed()
    .setColor('AQUA')
    .setTitle('Keva ti debela')
    .setImage(images[Math.floor(Math.random()*images.length)]);

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.toLowerCase() === prefix+'mrs') { 
        msg.reply('Ma mrs ti')
    }
    else if (msg.content.toLowerCase() === prefix+'debelsi') {
        await msg.channel.send({ embeds: [embed] });
    }
})

client.login(process.env.TOKEN)