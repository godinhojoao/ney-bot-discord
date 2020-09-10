const renderTextInImage = require('../utils/renderTextInImage');

module.exports = async (client, message, MessageAttachment) => {
    let text = message.content.match(/^\$ney\s(.*)/)[1];
    const modifiedFileName = './images/meninoNey2.jpg';

    await renderTextInImage(text, modifiedFileName, 300, 250);

    const attachment = new MessageAttachment(modifiedFileName);

    message.channel.send(attachment);
};