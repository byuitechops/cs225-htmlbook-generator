const cheerio = require('cheerio');
let $;

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