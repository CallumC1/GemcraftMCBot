const Discord = require('discord.js');
module.exports = {
	name: 'bug',
	description: 'Report a bug on GemcraftMC.',
    cooldown: 600,
    args: true,
    guildOnly: true,
    usage: '<Detailed dscription of the bug.>',
	execute(message, args) {
        const bugreport = new Discord.MessageEmbed()
            .setColor('#f5a442')
            .setTitle(`Bug Report - By: ${message.author.username}`)
            .setTimestamp()
            .addFields(
                { name: 'Description', value: '```' + args.slice(0).join(" ") + '```'},
                { name: '\u200B', value: '\u200B' },
                { name: 'Need to report a bug?', value: 'Type !bug <Text> in #bot-commands.'}
            )


        const channel = message.guild.channels.cache.find(x => x.name === '❗server-bugs');
        if(!channel) return message.reply("Couldn't find reports channel.");

        message.reply("Thanks for your report! We will look at this as soon as we can.")
        channel.send(bugreport)
        // channel.send(suggestion).then(suggestionm => {
        // suggestionm.react('✅')
        //     .then(suggestionm.react('❌'))
        // }
        //)
	},
};