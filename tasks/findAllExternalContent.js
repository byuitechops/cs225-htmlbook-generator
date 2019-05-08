const cheerio = require('cheerio');
let $;

/************************************************
 *            findAllExternalContent()
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
function findAllExternalContent(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let rx = /^http.*/;
    let externalLinkObjects = $('a').filter((i, link) => rx.test($(link).attr('href')));
    let externalImageObjects = $('img').filter((i, link) => rx.test($(link).attr('src')));
    externalLinkObjects.each((i, externalLinkObject) => {
        let link = $(externalLinkObject).attr('href');
        if (!link.includes('.png') && !link.includes('.jpg')) {
            let tempObject = {
                filepath: htmlObj.filePath,
                type: 'External Link',
                url: $(externalLinkObject).attr('href')
            };
            htmlObj.externalContent.push(tempObject);
        }
    });
    externalImageObjects.each((i, externalImageObject) => {
        let tempObject = {
            filepath: htmlObj.filePath,
            type: 'External Image',
            url: $(externalImageObject).attr('src')
        };
        htmlObj.externalContent.push(tempObject);
    });
    callback(null, htmlObj);
}

module.exports = findAllExternalContent;