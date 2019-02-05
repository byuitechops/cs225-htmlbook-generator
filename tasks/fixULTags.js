const cheerio = require('cheerio');
let $;

/************************************************
 *                 fixULTags()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The fixULTags function recieves an htmlObj
 *  and a callback function. The main purpose of
 *  this function is to add the browser-default
 *  class to every unordered list. To do this
 *  the function uses the cheerio library to
 *  load the HTML, select the unordered lists,
 *  and add the browser-default class to each
 *  one.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function fixULTags(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let ulTags = $('ul');
    ulTags.each(function () {
        let ulTag = $(this);
        ulTag.attr('class', 'browser-default');
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixULTags;