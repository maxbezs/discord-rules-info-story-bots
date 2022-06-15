module.exports = {
    name: 'info',
    description: "INFO!",
    execute(message, args, Discord){
        const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
		// inside a command, event listener, etc.
		const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setImage('https://i.imgur.com/hdCpl7P.png')
		
		const cartel = new MessageEmbed()
			.setColor('#ffffff')
			.addFields(
				{ name: '**What is CARTEL?**🤔', value: 'CARTEL™ is a next-gen **link-in-bio** service. It allows users to aggregate all of their social media links, bio, work experience, products, and services they have to offer, all in one 3D-style personal homepage/website. Users benefit from a personal website with desirable domain name: __www.cartel.link/[username]__ that they can then show off in the “Bio” section of their social media pages. CARTELs mission is to be "the most beautiful way to present yourself online, so that you can get the opportunities you deserve.'},
                { name: '\u200B', value: 'Our mission at CARTEL™ is to empower you with the most beautiful way to present yourself online, so that you can get the opportunities you deserve.' },
            )
            .setImage('https://i.imgur.com/MWpnZxK.jpg')

        const benefits = new MessageEmbed()
			.setColor('#ffffff')
			.addFields(
                { name: 'CARTEL Benefits✅', value: '✅ Differentiated 3D and glass-morphic user profile design' },
                { name: '\u200B', value: '✅ Futuristic branding with metaverse-style marketing content through a partnership with Image Factory' },
                { name: '\u200B', value: '✅ Eye-catching domain name: cartel.link/ as opposed to more functional competing names such as link.tree' },
                { name: '\u200B', value: '✅ More profile features; in addition to the usual list of links that competitors offer, CARTEL users can also list their work experiences and products/services they offer' },
                { name: '\u200B', value: '✅ Users login with their Coinbase account and verify access with their NFT ownership. This shows “cool factor” and more future-proofed technology due to added security and future web3 compatibility' },
                )
            .setImage('https://i.imgur.com/X2HjXOZ.jpg')
        const vision = new MessageEmbed()
			.setColor('#ffffff')
			.addFields(
                { name: 'CARTEL Vision📈', value: '📈 Join the metaverse space easily due to compatibility with brand and crypto-conscious users' },
                { name: '\u200B', value: '📈 Partner with recruitment companies to pitch CARTEL as **“the 21st century CV”**, new avenue of scaling ' },
            )
            .setImage('https://i.imgur.com/1w4DWXb.jpg')
        const rrrr = new MessageEmbed()
			.setColor('#ffffff')
			.addFields(
                { name: 'Problem📍', value: 'The average person has their identity spread across over 7 social media accounts, each representing a different side of their identity online. __50,000 people__ sign up each day to solve this problem, resorting to "link-in-bio" services that create personal homepages with an aggregated list of all their links. However, these pages are usually a simple, lame list of links with dull domain names. This means that people lose out on the opportunity to present themselves in the most beautiful way.' },
                { name: 'Solution💡', value: 'CARTEL™ brings your online identity together in a beautiful and connected way, into a desirable domain name, __cartel.link/user__. With a metaverse-inspired personal homepage, users can easily showcase all of their links, work experience, interests, products and services they have to offer. CARTEL™ users can also connect with one another, providing a new pool of networking and keeping the social spark alive.' },
            )
            .setImage('https://i.imgur.com/7QjAfzi.jpg')
        const links = new MessageEmbed()
			.setColor('#ffffff')
            .setTitle('Here are useful links for you!🔗')
        
        const rr = new MessageButton()
                    .setLabel('📷Instagram')
                    .setURL("https://www.instagram.com/cartel.link/")
                    .setStyle('LINK');
        const ff = new MessageButton()
                    .setLabel('🌐Website')
                    .setURL("https://www.cartel.link")
                    .setStyle('LINK');
        const gg = new MessageButton()
                    .setLabel('🧭Deck')
                    .setURL("https://www.cartel.link/deck")
                    .setStyle('LINK');
        const hh = new MessageButton()
                    .setLabel('📜NFT')
                    .setURL("https://www.cartel.link/nft")
                    .setStyle('LINK');   
        const instagram = new MessageActionRow()
                    .addComponents(rr, ff, gg, hh );  
		message.channel.send({ embeds: [exampleEmbed, cartel, rrrr, benefits, vision,  links], components: [instagram] });
	}
}