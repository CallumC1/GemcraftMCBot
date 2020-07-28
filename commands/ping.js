module.exports = {
	name: 'ping',
	description: 'Pong!',
	cooldown: 1,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};