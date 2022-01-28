const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});

module.exports = {
    name: 'ping',
    description: 'Prikaze ping botare',
    execute(message) {
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('Ping')
            .setDescription(`Moj WebSocket ping je ${Math.round(message.client.ws.ping)}`);

        message.reply({ embeds: [embed] });
    }
}