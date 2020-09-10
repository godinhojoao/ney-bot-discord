const config = require('./config.json');
const Discord = require('discord.js');
const MessageAttachment = Discord.MessageAttachment;
const client = new Discord.Client();
const commands = require('./utils/commandsReader')(config.prefix);
const commandsName = Object.keys(commands);

client.on('ready', async () => {
    let currentGuilds = await client.guilds.cache;

    currentGuilds.forEach((guild) => {
        console.log(`Estou em: ${guild.name}`);
    });

    client.user.setPresence({ activity: { name: 'BOLA NE PADRINHO $help' }, status: 'online' });
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    commandsName.forEach((commandName) => {
        if (message.content.split(' ', 1)[0] == commandName) {
            commands[commandName](client, message, MessageAttachment);
        };
    });
});

client.login(config.token);

module.exports = { commandsName: commandsName };