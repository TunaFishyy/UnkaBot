import DiscordJS, { Intents, Message } from 'discord.js'
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

var mrs = 'mrs'

client.on('messageCreate', (msg) => {
    if (msg.content.toLowerCase() === mrs) {
        msg.channel.send('Ma mrs ti')
    }
})

client.login(process.env.TOKEN)