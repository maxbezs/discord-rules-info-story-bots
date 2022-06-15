module.exports = {
    name: 'rules',
    description: "RULES!",
    execute(message, args, Discord){
        const { MessageEmbed } = require('discord.js');
		// inside a command, event listener, etc.
		const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setImage('https://i.imgur.com/aaUtnf1.png')
		
		const exampleEmbed1 = new MessageEmbed()
			.setColor('#ffffff')
			.addFields(
				{ name: '__**1. Be respectful**__\n', value: 'This means no mean, rude, or harassing comments. Treat others the way you want to be treated.'},
				{ name: '__**2. No inappropriate language**__\n', value: 'Use of profanity should be kept to a reasonable minimum. Any derogatory language towards any user is prohibited. Swearing is permitted in casual channels only, while the official help and code channels should be kept free of any profane language.' },
				{ name: '__**3. No spamming**__\n', value: 'Do not send a lot of small messages right after each other. These disrupt chat and make it hard to scroll through the server. Please keep your messages at least 5 words long while chatting.'},
				{ name: '__**4. No pornographic/adult/other NSFW material**__\n', value: 'The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material - not to share the aforementioned NSFW material.'},
				{ name: '__**5. No offensive names and profile pictures**__\n', value: 'Keep your names and profile picture appropriate.'},
				{ name: '__**6. Server Raiding**__\n', value: 'Server raiding is against the Discord terms of service. Any attempt to circumvent or bypass them can result in a permanent ban.'},
				{ name: '__**7. Threats are forbidden**__\n', value: 'Threats are prohibited and disallowed.'},
				{ name: '__**8. Follow the Discord Community Guidelines**__\n', value: 'You can find them here: https://discordapp.com/guidelines'},
				{ name: '\u200B', value: 'The Admins and Moderators will Mute/Kick/Ban per discretion. If you feel mistreated DM an <@970337784629968906>/<@509506753751154698> and we will resolve the issue.'},
			)
			.setFooter({ text: `**All Channels will have pinned messages explaining what they are there for and how everything works. If you don't understand something, feel free to ask!\n**Your presence in this server implies accepting these rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them.` });		
		message.channel.send({ embeds: [exampleEmbed,exampleEmbed1] });
	}
}