const cheerio = require('cheerio');
let $;

function fixULTags(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let ulTags = $('ul');
    ulTags.each(function () {
        let ulTag = $(this);
        ulTag.attr('class', 'browser-default');
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixULTags;