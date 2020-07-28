module.exports = {
    name: 'annoucement',
    alias: ['an'],
    description: 'Testing',
    role: 'Admin',
    guildOnly: true,
	cooldown: 1,
	execute(message, args) {

        const collector = message.channel.createMessageCollector({max: 1, time: 15000 });
        
        collector.on('collect', m => {
            console.log(`Collected ${m.content}`);
        });
        
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
	},
};