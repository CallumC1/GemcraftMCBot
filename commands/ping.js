const { Message } = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Pong!',
	cooldown: 1,
	execute(message, args) {
		const ping = Date.now() - message.createdTimestap;
		message.channel.send(':ping_pong: Pong!' + `${Date.now() - message.createdTimestap}` + "ms");
	},
};