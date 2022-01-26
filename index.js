import DJS from 'discord.js'
import dotenv from 'dotenv'
import { Intents } from 'DJS'
dotenv.config();

const client = new DJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
})

client.on('ready', () => {
    let handler = require('./command-handler');
    if (handler.default) handler = handler.default

    handler.client
    console.log('Bot se ukljucio.')
})

client.login(process.env.TOKEN)