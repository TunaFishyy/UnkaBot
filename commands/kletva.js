const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'kletva',
    description: 'Zaklij nekog.',
    execute(message) {
        const Target = message.mentions.users.first();

        var kletva1 = `Quo facto,\nfacio actum quod debet et maxime\n vult mittere omnia mala ad victimam <@${Target.id}>`;

        const Response = new MessageEmbed()
            .setTitle(`Bacam kletvu na <@${Target.id}>`)
            .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
            .setColor('DARK_BUT_NOT_BLACK')
            .setDescription(kletva1);

            message.reply({ embeds: [Response], allowedMentions: {repliedUser: false} });
    }
}