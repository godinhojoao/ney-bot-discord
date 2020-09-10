const fs = require('fs');

module.exports = (prefix) => {
    let commands = {};

    const scripts = fs.readdirSync("./commands");

    scripts.forEach((command) => {
        let commandName = command.split('.', 1)[0];

        commands[prefix + commandName] = require('../commands/' + command);
    });


    return commands;
};

