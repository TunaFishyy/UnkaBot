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

const arrayOfStatus = [
    'Jel vama Keza krindz',
    'M4LC0LM je debel',
    'Dudlic ga dudla',
    'Injox ga mece',
    'Samo jako resi ide gas',
    'Doni69 kid 09',
    'Infitor ne zna igrat csgo',
    'Pouka dana: ne igrajte wingman s Infitorom',
    'I sit by myseeeeelf, talking to the M00ooo0OOOOOO00000000n',
    'Nije u soldima svee',
    'Gledam gole tete',
    'Obavijest: Kezin KD vise nije u minusu eeeee',
    'Marusa gleda winxice',
    'Radi tesko cijeli daan',
    'M4LC0LM je dobar s AWP-om, no ne i najbolji',
    'Tutorijal za kezu: https://www.ergolink.com.au/blog/how-to-properly-hold-a-mouse-tips-for-using-a-mouse-correctly',
    'Skremplijev ping je najbolji!!',
]

client.on('ready', () => {
    console.log('Bot se ukljucio!'),
    setInterval(() => {
        client.user.setPresence({
            status: 'online',
            activities: [{
                name: arrayOfStatus[Math.floor(Math.random()*arrayOfStatus.length)],
                type: 'WATCHING'
            }]
        }, 5000);
    })
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