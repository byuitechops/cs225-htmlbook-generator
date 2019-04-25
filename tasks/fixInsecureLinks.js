const cheerio = require('cheerio');
let $;

/************************************************
 *               fixInsecureLinks()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function fixInsecureLinks(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let rx = /^http[^s]/g;
    let insecureHrefLinks = $('a').filter((i, link) => rx.test($(link).attr('href')));
    let insecureImageLinks = $('img').filter((i, link) => rx.test($(link).attr('src')));
    insecureHrefLinks.each((i, insecureLink) => {
        let badLink = $(insecureLink).attr('href');
        let goodLink = badLink.replace(rx, 'https:');
        $(insecureLink).attr('href', goodLink);
    });
    insecureImageLinks.each((i, insecureLink) => {
        let badLink = $(insecureLink).attr('src');
        let goodLink = badLink.replace(rx, 'https:');
        $(insecureLink).attr('src', goodLink);
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixInsecureLinks;