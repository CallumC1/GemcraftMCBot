const Discord = require('discord.js');
module.exports = {
	name: 'update',
    description: 'Server Updates',
    role: 'Owner',
    cooldown: 1,
    guildOnly: true,
    args: true,
    usage: '<Embed> <Text>', //Add Embed True / False Option? If no args 0 use embed |
	execute(message, args) {

        if(args[0] === 'Embed'){

            const update = new Discord.MessageEmbed()
                .setColor('#5dfa39')
                .setTitle('Gemcraft Survival | 📝 Update')
                // .setThumbnail(`https://i.imgur.com/jkx7wP0.png`)
                .setTimestamp()
                .setDescription('```diff\n' + args.slice(1).join(" ") + '```')
                .setFooter(`Sent by: ${message.author.username} | play.gemcraftmc.net`)

            message.channel.send(update);
        }else
            message.channel.send(args.slice(1).join(" "))
	},
};