import DiscordJS, { Intents, Message, MessageEmbed } from 'discord.js'
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

const images = ['https://i.imgur.com/He1yFhG.jpeg', 'https://imgur.com/gallery/O0XD03F', 'https://i.imgur.com/chiIGfLb.jpg', 'https://i.imgur.com/nP45XGvb.jpg',
                'https://i.imgur.com/TkzGmjJb.jpg', 'https://i.imgur.com/uqJ2ci5b.jpg', 'https://i.imgur.com/fK7NYeNb.jpg', 'https://i.imgur.com/HsPuvfvb.jpg'];
const embed = new MessageEmbed()
    .setColor('AQUA')
    .setTitle('Keva ti debela')
    .setDescription('Rip BOZO L')
    .setImage(images[Math.floor(Math.random()*images.length)]);

var prefix = '.'

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.toLowerCase() === prefix+'mrs') {
        msg.reply('Ma mrs ti')
    }
    if (msg.content.toLowerCase() === prefix+'debelsi') {
        msg.reply({ embeds: [embed] });
    }
})

client.login(process.env.TOKEN)