const cheerio = require('cheerio');
let $;

function removeText(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let textToRemove = [$('.comments'), $('.signature'), $('.tags'), $('.dropdownclick')];
    textToRemove.forEach(item => {
        item.each(function () {
            let element = $(this);
            element.replaceWith('');
        });
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeText;