const { translate } = require('free-translate');

const translateString = async (text) => {
    console.log(text,"text from service");
    const data = await translate(text, { to: "fr" });
    return data;
}

module.exports = translateString;

