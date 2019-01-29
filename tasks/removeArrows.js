const cheerio = require('cheerio');
let $;

function removeArrows(htmlObj, callback) {
    let tagsWithArrows = ['span', 'p'];
    tagsWithArrows.forEach(tagWithArrow => {
        $ = cheerio.load(htmlObj.htmlText);
        let arrows = $(tagWithArrow).filter(function () {
            return /↓|→/g.test($(this).text());
        });
        arrows.each(function () {
            let arrow = $(this);
            let textToReplaceWith = arrow.text().replace(/↓|→/g, '');
            if (!textToReplaceWith.trim()) {
                arrow.replaceWith(textToReplaceWith);
            } else {
                arrow.text(textToReplaceWith);
            }
        });
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeArrows;