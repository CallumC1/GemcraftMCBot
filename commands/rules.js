const Discord = require('discord.js');
module.exports = {
	name: 'rules',
    description: 'Server Rule Embed',
    role: 'Owner',
    guildOnly: true,
    args: true,
    usage: '<Text>', 
	execute(message, args) {

        const update = new Discord.MessageEmbed()
            .setColor('#32fc36')
            .setTitle('Gemcraft Survival • Discord Rules')
            // .setThumbnail(`https://i.imgur.com/jkx7wP0.png`)
            .setDescription(args.slice(0).join(" "))
            .setFooter(`Join Our Server • play.gemcraftmc.net`)

        message.channel.send(update)

	},
};