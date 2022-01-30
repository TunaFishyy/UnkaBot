const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'AntiKletva',
    description: 'CounterAttack .kletva',
    execute(message) {
        try {

            const Target = message.mentions.users.first();

        var kletva1 = `Micem kletvu od <@${Target.id}>, te bacam na njega jos JACU!!!`;

        const Response = new MessageEmbed()
            .setTitle(`Otklecujem <@${Target.id}>`)
            .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
            .setColor('DARK_BUT_NOT_BLACK')
            .setDescription(kletva1);

            message.reply({ embeds: [Response], allowedMentions: {repliedUser: false} });

        } catch (error) {
            message.reply('Koga zelis counterUkleti? **.antikletva @user**')
        }

    }
}