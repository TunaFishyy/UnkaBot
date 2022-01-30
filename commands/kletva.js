const { MessageEmbed } = require('discord.js');

var kletva1 = `Quo facto,\nfacio actum quod debet et maxime\n vult mittere omnia mala ad victimam <@${target.user.id}>`;

module.exports = {
    name: 'kletva',
    description: 'Zaklij nekog.',
    execute(message) {
        const target = message.mentions.user.first();
        if (!message.content.toLowerCase().includes(target)) {
            await message.reply('Moras navesti na koga ces baciti kletvu. **.kletva @user**');
        } else {
            const embed = new MessageEmbed()
                .setColor('DARK_BUT_NOT_BLACK')
                .setTitle(`Bacam kletvu na <@${target.user.id}>`)
                .setDescription(kletva1)
                .setImage(target.author.avatarURL)
                .setImage();
        }

    }
}