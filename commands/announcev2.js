module.exports = {
    name: 'annoucement2',
    alias: ['an'],
    description: 'Testing',
    development: true,
    role: 'Admin',
    guildOnly: true,
	cooldown: 1,
	execute(message, args) {

        //1. Send Await Message Asking If it should be an embed or not.
        //2. Print Message saying what they picked & delete thebots message & users message.
        //3. Send Another Await Message which contains what they would like to broadcast.
        //4. Delete Bot & user messages.
        //5. Send a Preview in the channel they are in.
        //6. Send Await Embed asking what channel they would like to send it in & to confirm if they want to send it.
        //7. Get channel, Check it exists, Send the Message / Embed.
	},
};