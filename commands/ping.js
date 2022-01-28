const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Prikaze ping botare',
    execute : async(message) => {
        const msg = await message.reply('Povezivanje...');
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('Ping')
            .setDescription(`Tvoj ping je ${msg.createdAt - message.createdAt}ms`);
            msg.delete();

        await message.reply({ embeds: [embed], allowedMentions: {repliedUser: false} });
    }
}