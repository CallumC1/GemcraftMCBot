const Discord = require('discord.js');
module.exports = {
	name: 'update',
    description: 'Server Updates',
    role: 'Owner',
    guildOnly: true,
    args: true,
    usage: '<Embed | True / False> <Text>', //Add Embed True / False Option? If no args 0 use embed |
	execute(message, args) {

        const args0 = args[0].toUpperCase()
        if(args0 === 'TRUE'){

            const update = new Discord.MessageEmbed()
                .setColor('#5dfa39')
                .setTitle('📖 Update • Gemcraft Survival')
                // .setThumbnail(`https://i.imgur.com/jkx7wP0.png`)
                .setTimestamp()
                .setDescription('```diff\n' + args.slice(1).join(" ") + '```')
                .setFooter(`Sent by: ${message.author.username} • play.gemcraftmc.net`)

            message.channel.send(update)
        }else if(args0 === 'FALSE'){
            message.channel.send(args.slice(1).join(" "))
        }else
            return message.channel.send("Please type either True or False for Embed Argument.")
	},
};