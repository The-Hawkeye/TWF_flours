const { translate } = require('free-translate');

const translateString = async (text) => {
    console.log(text,"text from service");
    const data = await translate(text, { from:"en", to: "fr" });
    console.log(data,"data from service")
    return data;
}

module.exports = translateString;

