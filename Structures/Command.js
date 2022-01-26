const Discord = require('discord.js');
import { Client } from "../Structures/Client.js"

/**
 * 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {String[]} args 
 * @param {Client} client 
 */

function RunFuction(message, args, client) {}

class Command {

    /**
     * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */

    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;