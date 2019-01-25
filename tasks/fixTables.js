const cheerio = require('cheerio');
let $;

function fixTables(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let tables = $('table');
    tables.each(function () {
        let table = $(this);
        let tableHTML = table.html();
        table.replaceWith(`<div class="table"><table>${tableHTML}</table></div>`);
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = fixTables;