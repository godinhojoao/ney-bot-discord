const Jimp = require('jimp');

function removeFromBackToFront(text, index) {
    return text.substring(0, index);
};

function whatIsHeightText(font, text, maxWidth) {
    return Jimp.measureTextHeight(font, text, maxWidth);
};

async function makeAdjustmentsInText(text, maxWidth, maxHeight, height) {
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

    if (height > maxHeight) {
        return makeAdjustmentsInTextHeight(text, maxWidth, maxHeight);
    } else {
        return text;
    }
};

async function makeAdjustmentsInTextHeight(text, maxWidth, maxHeight) {
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    let wordsOfTheText = text.split(" ");
    let newText = "";

    for (let word of wordsOfTheText) {

        if (word.length > 12) {
            while (word.length > 12) {
                word = removeFromBackToFront(word, word.length - 1);
            };
        }

        newText += word + " ";
        let newHeight = whatIsHeightText(font, newText, maxWidth);

        while (newHeight > maxHeight) {
            newText = removeFromBackToFront(newText, newText.length - 1);
            newHeight = whatIsHeightText(font, newText, maxWidth);
        };
    };
    return newText;
};

module.exports = {
    whatIsHeightText: whatIsHeightText,
    makeAdjustmentsInText: makeAdjustmentsInText
};