const cheerio = require('cheerio');
let $;

/************************************************
 *                 removeScripts()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The removeScripts function recieves an
 *  htmlObj and a callback function. The main
 *  purpose of this function is to remove any
 *  scripts that are found on the page that
 *  are not whitelisted. To do this the function
 *  uses the Cheerio library to load the html,
 *  select the script tags, and remove the 
 *  ones that are not whitelisted.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function removeScripts(htmlObj, callback) {
    const whiteListScripts = ['prism.js', 'materialize.min.js', 'main.js'];
    $ = cheerio.load(htmlObj.htmlText);
    let scriptsToRemove = $('script').filter(function () {
        return !whiteListScripts.some(whiteListScript => {
            let src = $(this).attr('src');
            if (src != undefined) {
                return src.includes(whiteListScript);
            } else {
                return false;
            }
        });
    });
    scriptsToRemove.each(function () {
        let scriptToRemove = $(this);
        scriptToRemove.replaceWith('');
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = removeScripts;