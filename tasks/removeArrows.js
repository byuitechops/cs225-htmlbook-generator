const cheerio = require('cheerio');
let $;

/************************************************
 *                 removeArrows()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The removeArrows function recieves an htmlObj
 *  and a callback function. The main purpose of
 *  this function is to remove any old dropdown
 *  arrows from the page. To do this the function
 *  uses the Cheerio library to load the HTML,
 *  select the arrows, and remove them from the
 *  page.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
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