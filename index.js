/** @format */
import dotenv from 'dotenv'
dotenv.config();

const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");
const client = new Client();
import fs from 'fs';


fs.readdirSync("./Commands").filter(file => file.endsWith(".js")).forEach(file => {
    /**
     * @type {Command}
     */
    const command = require(`./Commands/${file}`);
    console.log(`Command ${command.name} loaded`);
    client.commands.set(command.name, command);
})

client.on('ready', () => {
    console.log('Bot is on.');
})

client.on('messageCreate', message => {
    var prefix = '.';
    if (!message.content.startsWith(prefix) || message.author.bot);

    const args = message.content.substring(prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply(`${args[0]} nije valjana komanda.`);

    command.run(message, args, client);
})

client.login(process.env.TOKEN);