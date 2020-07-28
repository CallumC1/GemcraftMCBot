module.exports = {
	name: 'aembed',
	description: 'Embed Testing',
	role: 'Admin',
	cooldown: 1,
	execute(message, args) {
		const filter = m => m.content.includes('discord');
		const collector = message.channel.createMessageCollector(filter, { time: 15000 });

		collector.on('collect', m => {
			console.log(`Collected ${m.content}`);
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
			const channel = message.guild.channels.cache.find(x => x.name === 'logs');
			if(!channel) return message.reply("Couldn't find logs channel");
	
			channel.send(`Collected ${collected.size} items.`)
		});
	},
};