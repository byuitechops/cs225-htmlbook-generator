const cheerio = require('cheerio');
const path = require('path');
let $;

/************************************************
 *             replaceExternalLinks
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
function replaceExternalLinks(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let rx = /^http.*blog./;
    let relativeString = $('script').attr('src');
    if (relativeString) {
        let relativePath = relativeString.match(/^\..*\.\\/);
        if (relativePath) {
            let externalLinkObjects = $('a').filter((i, link) => rx.test($(link).attr('href')));
            externalLinkObjects.each((i, externalLinkObject) => {
                let link = $(externalLinkObject).attr('href');
                link = link.replace(/^http.*blog.mclaughlinsoftware.com\//, relativePath[0] + 'db1\\');
                $(externalLinkObject).attr('href', link);
            });
            let externalImageObjects = $('img').filter((i, link) => rx.test($(link).attr('src')));
            relativePath = relativePath[0].replace(/\.\.\\/, '');
            externalImageObjects.each((i, externalImageObject) => {
                let imageSrc = $(externalImageObject).attr('src');
                imageSrc = imageSrc.replace(/^http.*blog.mclaughlinsoftware.com\/wp-content\/uploads\/.*\/.*\//, relativePath + 'content\\');
                $(externalImageObject).attr('src', imageSrc);
                $(externalImageObject).attr('srcset', null);
            });
        }
    }
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = replaceExternalLinks;