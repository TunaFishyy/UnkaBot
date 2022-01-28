const { MessageEmbed } = require('discord.js')
 
module.exports = {
    name: 'help',
    description: 'Sends command help.',
    execute(message) {
        const embed = new MessageEmbed()
            .setTitle('Help Meni')
            .setDescription('Prefix: **.**\nKomande: **mrs**, **debelsi**, **ping**')
            .setColor('AQUA');
 
        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}