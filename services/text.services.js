const { translate } = require('free-translate');

const translateString = async (text) => {
    const data = await translate(text, { to: "fr" });
    return data;
}

module.exports = translateString;

