const { MessageEmbed } = require('discord.js');

const images = [
    'https://www.imgur.com/pXZHzYkb.png', 'https://www.imgur.com/TkzGmjJb.png', 'https://www.imgur.com/mLj0Snjb.png', 'https://www.imgur.com/ujp0GpXb.png',
    'https://www.imgur.com/FQU0tXmb.png', 'https://www.imgur.com/SHCDUlub.png'
];

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