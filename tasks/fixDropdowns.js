const cheerio = require('cheerio');
let $;

function fixDropdowns(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let dropdowns = $('.dropdownbox');
    dropdowns.each(function () {
        let dropdown = $(this);
        let dropdownTitle = dropdown.prev('p[style]').text();
        if (!dropdownTitle) {
            dropdownTitle = dropdown.find('span[style]').first().text();
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}
module.exports = fixDropdowns;