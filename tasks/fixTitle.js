const cheerio = require('cheerio');
let $;

/************************************************
 *                   fixTitle()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The fixTitle function recieves an htmlObj
 *  and a callback function. The main purpose
 *  of this function is to replace the current
 *  blue link title with a black normal title. 
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function fixTitle(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let title = $('h2').first();
    title.replaceWith(`<h2>${title.text()}</h2>`);
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixTitle;