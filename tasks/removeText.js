const cheerio = require('cheerio');
let $;

/************************************************
 *                 removeText()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The removeText function recieves an htmlObj
 *  and a callback function. The main purpose of
 *  this function is to remove unncessary text
 *  from the page. To do this the function uses
 *  the Cheerio library to load the HTML, 
 *  select the text to remove, and remove it.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function removeText(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let textToRemove = '.comments, .signature, .tags, .dropdownclick:contains("Display Text"), #bubble, #loginslider, h1>a, #sidebar, form, #comments, .commentlist, .comment_meta, #respond, .reply, iframe, .navigation, .footer, #footer';
    $(textToRemove).each(function () {
        let element = $(this);
        element.replaceWith('');
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeText;