const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    description: 'Shows info on commands.',
    aliases: ['commands'],
    usage: '<command name>',
    cooldown: 1,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;
        // send data
        if (!args.length) {
            if (command.development == true) {
                stop
            }
            data.push(`**Here\'s a list of the commands I have:**`)
            data.push('`' + commands.map(command => command.name).join('\n') + '`');
            data.push(`\n**Find out more about a command by typing:** \`${prefix}help <command name>\``)

            return message.author.send(data, { split: true})
                .then(() => {
                    if(message.channel.type === 'dm') return;
                    message.reply('You have been sent a DM with my commands!');
                })
                .catch(error => {
                    console.error(`Could not send the Help DM to ${message.author.tag}.\n`, error);
                    message.reply('I can\'t DM you right now. Do you have your DMs disabled?');
                });
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('That\'s not a valid command!');
        }
        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
        if (command.role) data.push(`**Required Role:** ${command.role}`);
        if (command.permission) data.push(`**Required Permssion:** ${command.permission}`);
        if(command.cooldown) data.push(`**Cooldown:** ${command.cooldown} second(s)`);

        message.channel.send(data, {split: true});
        // send data
    },
};