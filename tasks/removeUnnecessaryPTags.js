const cheerio = require('cheerio');
let $;

function removeUnnecessaryPTags(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    callback(null, htmlObj);
}

module.exports = removeUnnecessaryPTags;