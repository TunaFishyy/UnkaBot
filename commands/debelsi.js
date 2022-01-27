const { MessageEmbed } = require('discord.js');

const images = ['https://imgur.com/pXZHzYkb.jpg'];

module.exports = {
    name: 'debelsi',
    description: 'Kazi nekomu da je debel',
    execute(message) {
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setImage(images[Math.floor(Math.random()*images.length)])
            .setTitle('Keva ti debela');

        message.reply({ embeds: [embed] });
    }
}