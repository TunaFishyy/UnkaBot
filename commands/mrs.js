const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'mrs',
    description: 'mrses back',
    execute(message) {
        message.reply('Ma mrs ti');
    }
}