const cheerio = require('cheerio');
let $;

/************************************************
 *                  fixTables()
 *
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The fixTables function recieves an htmlObj
 *  and a callback function. The main purpose
 *  of this function is to make all tables
 *  follow responsive design. To do this the
 *  function uses Cheerio to load the html,
 *  wrap all tables inside of a div that has a
 *  class of table. This class makes the tables
 *  side scrollable on mobile devices. 
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
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