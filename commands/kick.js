const { Guild } = require("discord.js");

module.exports = {
    name: 'kick',
	usage: '<user> <reason>',
	role: 'Admin',
	args: true,
	guildOnly: true,
	description: 'Kick a user from the server.',
	execute(message, args) {
	// grab the "first" mentioned user from the message
	// this will return a `User` object, just like `message.author`
	const taggedUser = message.mentions.users.first();
	const banReason = args.slice(1).join(" ")


	message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};