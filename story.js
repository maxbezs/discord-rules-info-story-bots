module.exports = {
    name: 'story',
    description: "STORY!",
    execute(message, args, Discord){
        const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
		// inside a command, event listener, etc.
		const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setImage('https://i.imgur.com/HFJbbTz.png')
		
		const exampleEmbed1 = new MessageEmbed()
			.setColor('#ffffff')
			.addFields(
				{ name: 'Once upon a time...', value: 'In the land of Atlantis ... an ancient race of mankind believed that there lay a great message in the essence heart of every living being . Devoted to a culture of science and spirituality , the Atlanteans valued sacred mythology ; a prophetic story that taught of a vast reserve of dormant DNA in the every human , ready to be synthetically activated when humanity gained the right level of understanding .'},
                { name: '\u200B', value: 'Thousands of years later , after generations of hard work , the Atlantean scientists finally found what they were looking for ... but were they ready ?'},
                { name: '\u200B', value: 'In The Great Laboratory of Amenti , a perfected prototype of powerful humans were grown through experimentation of the elixir of creation . Codenamed Deities , these creations represented the next step in the evolution of humanity , each of them with physical , mental and spiritual abilities never seen before .'},
                { name: '\u200B', value: "Intimately connected with their essence - hearts , and realising the greater purpose of their existence in the Universe , the Deities held an insatiable gratitude for their scientist creators , swearing a timeless oath to protect and serve humanity with all the powers they so humbly gained . Working cooperatively , it wasn't long until the technology of Atlanteans progressed a thousand years in one decade."},
                { name: '\u200B', value: '**But...**'},
           )
           const rr = new MessageButton()
                .setLabel('📚Read more')
                .setURL("https://www.figma.com/proto/I3nghhXskqVS1z4WDYAuQW/CARTEL-PITCH-DECK-2022?node-id=240%3A4893&scaling=scale-down")
                .setStyle('LINK');
            const instagram = new MessageActionRow()
                .addComponents(rr);
		message.channel.send({ embeds: [exampleEmbed,exampleEmbed1], components: [instagram] });
	}
}