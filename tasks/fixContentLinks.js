const cheerio = require('cheerio');
let $;

/************************************************
 *               fixContentLinks()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The fixContentLinks function receives an
 *  htmlObj and a callback function. The main
 *  purpose of the function is to find all anchor
 *  and image tags that link to the wp-content
 *  directory and change the path to the new
 *  content directory. To do this we use the
 *  Cheerio library, load the html, select and
 *  filter the anchor and image tags, and replace
 *  the path from wp-content to content.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function fixContentLinks(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let contentLinks = $('a, img').filter(function () {
        if ($(this).attr('href') !== undefined) {
            return /\.\.\/wp-content/gmi.test($(this).attr('href'));
        } else if ($(this).attr('src') !== undefined) {
            return /\.\.\/wp-content/gmi.test($(this).attr('src'));
        }
    });
    contentLinks.each(function () {
        let contentLink;
        if ($(this).attr('href') !== undefined) {
            contentLink = $(this).attr('href');
            contentLink = contentLink.replace(/wp-content\/uploads\/....\/../, 'content');
            $(this).attr('href', contentLink);
        } else if ($(this).attr('src') !== undefined) {
            contentLink = $(this).attr('src');
            contentLink = contentLink.replace(/wp-content\/uploads\/....\/../, 'content');
            $(this).attr('src', contentLink);
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixContentLinks;