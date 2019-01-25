const cheerio = require('cheerio');
let $;

function fixTitle(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let title = $('h2').first();
    title.replaceWith(`<h2>${title.text()}</h2>`);
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixTitle;