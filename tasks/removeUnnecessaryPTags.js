const cheerio = require('cheerio');
let $;

/************************************************
 *            removeUnnecessaryPTags()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The removeUnnecessaryPTags function receives
 *  an htmlObj and a callback function. The
 *  main purpose of this function is to erase
 *  paragraph tags that are empty inside of the
 *  html. These paragraph tags are currently
 *  being used for spacing. The new template
 *  fixes this spacing problem. To do this the
 *  function uses the Cheerio library to load
 *  the html, select the paragraph tags and
 *  remove any empty paragraph tags.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function removeUnnecessaryPTags(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let pTags = $('p');
    pTags.each(function () {
        let pTag = $(this);
        if (pTag.html().includes('<!')) {
            pTag.replaceWith('');
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeUnnecessaryPTags;