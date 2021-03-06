const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', ()=>{
    console.log("BRRRRRRRRRRRRRRRRRRRRR");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    }else if (command =='rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }else if (command =='info'){
        client.commands.get('info').execute(message, args, Discord);
    }else if (command =='story'){
        client.commands.get('story').execute(message, args, Discord);
    }
});

client.login('OTg0ODk5MTM5Njk3NTA4NDQ0.G43fUp.ObcQ93VLRqxUPlCx9YBLzJ2dDMBj4Yr7TGgCs0');
