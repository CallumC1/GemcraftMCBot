const { Message, MessageEmbed, DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Pong! Get the bots ping.',
	cooldown: 1,
	execute(message, args) {
		// message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);

		const botping = new Discord.MessageEmbed()
			.setColor('#037bfc')
			.setTitle('🏓 Bot Latency')
			.setDescription(`Latency: ${Date.now() - message.createdTimestamp}ms`)

		message.channel.send(botping)
	},
};