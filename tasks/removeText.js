const cheerio = require('cheerio');
let $;

function removeText(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let textToRemove = [$('.comments'), $('.signature'), $('.tags'), $('.dropdownclick')];
    textToRemove.forEach((item, i) => {
        item.each(function () {
            let element = $(this);
            if (i === 3) {
                if (element.text().includes('Display Text')) {
                    element.replaceWith('');
                }
            } else {
                element.replaceWith('');
            }
        });
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeText;