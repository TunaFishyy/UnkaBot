const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Prikaze ping botare',
    execute(message) {
        const msg = await message.reply('Povezivanje...');
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('Ping')
            .setDescription(`Tvoj ping je ${Math.floor(msg.createdAt - message.createdAt)}ms`);

        message.reply({ embeds: [embed], allowedMentions: {repliedUser: false} });
    }
}