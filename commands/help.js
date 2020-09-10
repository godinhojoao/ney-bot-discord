const descriptions = {
    "$help": "Use este comando para listar todos os comandos disponíveis.",
    "$ney": "O conteúdo após este comando será inserido em um meme do menino ney B)."
};

module.exports = (client, message) => {
    const { commandsName } = require('../bot');
    let text = "\nComandos existentes até o momento: \n";

    commandsName.forEach((command) => {
        text += `\n ${command}: ${descriptions[command] ? descriptions[command] : "Nenhuma descrição."} \n`;
    });

    message.reply(text);
};