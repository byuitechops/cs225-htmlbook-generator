const cheerio = require('cheerio');
let $;

function removeUnnecessaryPTags(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let pTags = $('p');
    pTags.each(function () {
        let pTag = $(this);
        if (pTag.html().includes('<!')) {
            pTag.replaceWith('');
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeUnnecessaryPTags;