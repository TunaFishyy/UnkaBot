import dotenv from 'dotenv';
dotenv.config();
import { Client, Intents } from 'discord.js';
import fs from 'fs';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

import config from './config.json' assert { type: 'json' };
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Discord.Collection();

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events)
 {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(command.name, command);
}

client.login(process.env.TOKEN);