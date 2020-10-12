const { Message } = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'Pong!',
	cooldown: 1,
	execute(message, args) {
		var pingmsg = await message.channel.send("Pinging Server...")
		message.channel.send(':ping_pong: Pong!' + `${pingmsg.Date.now() - message.createdTimestamp}` + "ms");
	},
};