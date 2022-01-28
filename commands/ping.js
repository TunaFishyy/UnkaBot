const { MessageEmbed } = require('discord.js');
const { client } = require('../index.js');

module.exports = {
    name: 'ping',
    description: 'Prikaze ping botare',
    execute(message) {
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('Ping')
            .setDescription(`Moj WebSocket ping je ${Math.round(client.ws.ping)}`);

        message.reply({ embeds: [embed] });
    }
}