const Discord = require('discord.js');
module.exports = {
	name: 'update',
    description: 'Server Updates',
    role: 'Owner',
    cooldown: 1,
    guildOnly: true,
    args: true,
    usage: '<Hex Code> <Text>',
	execute(message, args) {
        const update = new Discord.MessageEmbed()
            .setColor(args[0])
            .setTitle('GemcraftMC Update')
            .setThumbnail(`https://i.imgur.com/jkx7wP0.png`)
            .setTimestamp()
            .setDescription('```diff\n' + args.slice(1).join(" ") + '```')
            .setFooter(`Sent by: ${message.author.username} | play.gemcraftmc.net`)

        message.channel.send(update);
	},
};