const { Message } = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Pong!',
	cooldown: 1,
	execute(message, args) {
		message.channel.send("Getting bot ping...").then(m =>{
			var ping = m.createdTimestamp - message.createdTimestamp;
			var trueping = Math.round(bot.pi);
		
			m.edit(`Bot latency: ${botPing}`);
		});
	},
};