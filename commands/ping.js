const { Message } = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Pong!',
	cooldown: 1,
	execute(message, args) {
		message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms.`);
	},
};