const beautify = require('js-beautify').html;

/************************************************
 *                beautifyHTML()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The beautifyHTML function recieves an htmlObj
 *  and a callback function. The function uses
 *  the js-beautify library to format the html to
 *  a more maintainable format.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function beautifyHTML(htmlObj, callback) {
    htmlObj.htmlText = beautify(htmlObj.htmlText, {
        max_preserve_newlines: 0,
        wrap_line_length: 100
    });
    callback(null, htmlObj);
}

module.exports = beautifyHTML;