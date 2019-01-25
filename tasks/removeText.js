const cheerio = require('cheerio');
let $;

function removeText(htmlObj, callback) {
    console.log(htmlObj);
    $ = cheerio.load(htmlObj.htmlText);
    callback(null, htmlObj);
}

module.exports = removeText;