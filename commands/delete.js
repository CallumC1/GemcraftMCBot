module.exports = {
	name: 'delete',
	args: true,
	usage: '<1 - 99>',
	role: 'Admin',
	guildOnly: true,
	cooldown: 3,
	description: 'Delete a select amount of messages.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 100.');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to delete messages in this channel!');
		});

	},
};