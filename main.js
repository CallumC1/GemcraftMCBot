const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { guildOnly } = require('./commands/kick');
const { argsa } = require('./commands/updates');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Cooldowns
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);

}

client.once('ready', async ()  => {
	console.log('GemcraftMC Bot Ready!');

	// client.user.setStatus('online')
	client.user.setActivity(`Gemcraft | Use !help`);
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const memberJoin = new Discord.MessageEmbed()
	.setColor('#21ed69')
	.setTitle(`Welcome to Gemcraft Survival!`)
	.setThumbnail(member.displayAvatarURL)
	.setTimestamp()
	.setDescription(`Welcome, ${member}\n Please Verify in #📜general-rules` + '\n**Server IP ▸** play.gemcraftmc.net \n**Website ▸** Coming Soon! \n**Store ▸**store.gemcraftmc.net\n ')
	.setFooter(`Click the ✅ in #📜general-rules to verify!`)

channel.send(memberJoin)
});


client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) 
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}


	// Permission
	if (command.permission) {

		if (!message.member.hasPermission(command.permission)) {
			reply = `Incorrect Permissions`;
			// return message.channel.send(reply);

			const incorrectPerms = new Discord.MessageEmbed()
            .setColor('#ff0505')
            .setTitle('Incorrect Permission!')
            .setDescription(`You need ${command.permission} to run this command.`)
			
			return message.channel.send(incorrectPerms)

		}
	}

	// Role Require
	if (command.role) {

		if (!message.member.roles.cache.some(role => role.name === command.role)) {

			const incorrectRole = new Discord.MessageEmbed()
            .setColor('#ff0505')
            .setTitle('Incorrect Role!')
            .setDescription(`You need the ${command.role} role to run this command.`)
			
			return message.channel.send(incorrectRole)

		}
	}

	// No Args & Usage
	if (command.args && !args.length || command.args > args.length) {
		let reply = `You did not provide any / enough arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nCorect Usage: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

    //cooldown implementation
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection())
    }

    let now = Date.now()
    let timestamps = cooldowns.get(command.name)
	let cooldownAmount = (command.cooldown) * 1000

    if (timestamps.has(message.author.id)) {
        let expirationTime = timestamps.get(message.author.id) + cooldownAmount

        if (now < expirationTime) {
            let timeleft = (expirationTime - now) / 1000
            return message.reply(`please wait ${timeleft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
		}
	}
	timestamps.set(message.author.id, now)
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
	//cooldown implementation


	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});

client.login(process.env.token);