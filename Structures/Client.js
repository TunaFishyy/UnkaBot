const Discord = require('discord.js');

import { Command } from "./Command.js";

const intents = new Discord.Intents(32767);

class Client extends Discord.Client {
    constructor(options) {
        super({ intents });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
    }
}

module.exports = Client;