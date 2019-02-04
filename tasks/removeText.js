const cheerio = require('cheerio');
let $;

function removeText(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let textToRemove = '.comments, .signature, .tags, .dropdownclick:contains("Display Text"), #bubble, #loginslider, h1>a, #sidebar, form, #comments, .commentlist, .comment_meta, #respond, .reply';
    $(textToRemove).each(function () {
        let element = $(this);
        element.replaceWith('');
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeText;