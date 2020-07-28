const Discord = require('discord.js');
module.exports = {
	name: 'suggest',
	description: 'Give a suggestion.',
    cooldown: 600,
    args: true,
    guildOnly: true,
    usage: '<Suggestion>',
	execute(message, args) {
        const suggestion = new Discord.MessageEmbed()
            .setColor('#f5a442')
            .setTitle(`Suggestion - By: ${message.author.username}`)
            .setTimestamp()
            .addFields(
                { name: 'Description', value: '```' + args.slice(0).join(" ") + '```'},
                { name: '\u200B', value: '\u200B' },
                { name: 'Want to suggest something?', value: 'Type !suggest <Text> in #bot-commands.'}
            )


        const channel = message.guild.channels.cache.find(x => x.name === '💡suggestions' || 'suggestions');
        if(!channel) return message.reply("Couldn't find suggestions channel.");

        message.reply("Thanks, your suggestion has been submitted!")
        channel.send(suggestion).then(suggestionm => {
        suggestionm.react('✅')
            .then(suggestionm.react('❌'))
        }
        )
	},
};