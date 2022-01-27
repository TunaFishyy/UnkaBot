const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    category: "fun",
    description: "Command shows Bot's latency & ping",
    run : async(client, message, args) => {
        const msg = await message.reply(`Pingiranje.. lmaoo`);
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setColor('DARK_AQUA')
            .setDescription(`Ping je \`${client.ws.ping}ms\`\nLatency je ${Math.floor(msg.createdAt - message.createdAt)}ms`)
        msg.delete();
        await message.channel.send({ embeds: [embed] });
    }
}