const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'antikletva',
    description: 'CounterAttack kletva',
    execute(message) {
        try {

            const target = message.mentions.users.first();

        var kletva2 = `Micem kletvu od <@${target.id}>, te bacam na nj jos JACU!!!`;

        const response = new MessageEmbed()
            .setTitle(`Otklecujem <@${target.id}>`)
            .setThumbnail(target.displayAvatarURL({ dynamic: true }))
            .setColor('DARK_BUT_NOT_BLACK')
            .setDescription(kletva2);

            message.reply({ embeds: [response], allowedMentions: {repliedUser: false} });

        } catch (error) {
            message.reply('Koga zelis counterUkleti? **.antikletva @user**')
        }

    }
}