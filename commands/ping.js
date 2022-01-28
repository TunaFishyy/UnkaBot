const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Prikaze ping botare',
    execute(message) {
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('Ping')
            .setDescription(`Moj WebSocket ping je ${client.ws.ping}`);

        message.reply({ embeds: [embed] });
    }
}