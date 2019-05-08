const cheerio = require('cheerio');
let $;

function removeInlineStylesFromGrandchildren(element) {
    $(element).children().each((i, child) => {
        $(child).attr('style', null);
        if (child.children.length > 0) {
            removeInlineStylesFromGrandchildren(child);
        }
    });
}

/************************************************
 *             removeInlineStyles
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 * 
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function removeInlineStyles(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    $('body').children().each((i, element) => {
        $(element).attr('style', null);
        if (element.children.length > 0) {
            removeInlineStylesFromGrandchildren(element);
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeInlineStyles;