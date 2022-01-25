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

const images = ['https://www.i.imgur.com/He1yFhG.png', 'https://www.i.imgur.com/QMJuIcDb.png', 'https://www.i.imgur.com/chiIGfLb.png', 'https://www.i.imgur.com/nP45XGvb.png',
                'https://www.i.imgur.com/TkzGmjJb.png', 'https://www.i.imgur.com/uqJ2ci5b.png', 'https://www.i.imgur.com/fK7NYeNb.png', 'https://www.i.imgur.com/HsPuvfvb.png'];

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
        msg.channel.send({ embeds: [embed] });
        console.log(images[Math.floor(Math.random()*images.length)]);
    }
})

client.login(process.env.TOKEN)