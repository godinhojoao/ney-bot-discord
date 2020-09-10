const Jimp = require('jimp');
const fileName = './images/neyBoy.jpg';
const { makeAdjustmentsInText, whatIsHeightText } = require('../utils/makeAdjustmentsInText');

async function renderTextInImage(text, modifiedFileName, maxWidth, maxHeight) {
    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    let height = await whatIsHeightText(font, text, maxWidth);

    let newText = await makeAdjustmentsInText(text, maxWidth, maxHeight, height);

    await Jimp.read(fileName)
        .then(async (image) => {
            await image.print(
                font,
                50,
                50,
                `"${newText}"`
                ,
                maxWidth,
                maxHeight
            )
            return image;
        })
        .then(image => {
            image.print(font, 50, maxWidth, '- Neymar.');
            return image
        })
        .then((image) => {
            image.write(modifiedFileName);
        })
        .catch(err => console.log(err));
};

module.exports = renderTextInImage;