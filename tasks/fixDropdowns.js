const cheerio = require('cheerio');
let $;

/************************************************
 *                fixDropdowns()
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The fixDropdowns function recieves an htmlObj
 *  and a callback function. The function's main
 *  purpose is to locate any dropdowns on the
 *  page and change them to the new dropdowns. 
 *  The function does this using the Cheerio
 *  library to load the html, select the dropdowns
 *  and format them to the new dropdowns. 
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function fixDropdowns(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let dropdowns = $('.dropdownbox');
    if (dropdowns.length > 0) {
        dropdowns.each(function () {
            let dropdown = $(this);
            let dropdownTitle = dropdown.prev('p[style]');
            let dropdownTitleText = dropdownTitle.text();
            dropdownTitle.replaceWith('');
            if (!dropdownTitleText) {
                dropdownTitle = dropdown.find('span[style]').first();
                dropdownTitleText = dropdownTitle.text();
                dropdownTitle.replaceWith('');
            }
            dropdownTitleText.trim();
            if (/\s$/g.test(dropdownTitleText)) {
                dropdownTitle = dropdown.find('p[class=dropdownclick]').first();
                dropdownTitleText = dropdownTitle.text();
                dropdownTitle.replaceWith('');
            }
            dropdownTitleText = dropdownTitleText.replace(/↓|→/g, '');
            let dropdownTemplate = `
            <ul class="collapsible expandable">
                <li>
                    <div title="Click to see the instructions ..." class="collapsible-header">${dropdownTitleText}
                        <i class="material-icons left">keyboard_arrow_right</i>
                    </div>
                    <div class="collapsible-body">
                    <h4>${dropdownTitleText}</h4>
                    ${dropdown.html()}
                    </div>
                </li>
            </ul>        
            `;
            dropdown.replaceWith(dropdownTemplate);
        });
        htmlObj.htmlText = $.html();
        fixDropdowns(htmlObj, callback);
    } else {
        callback(null, htmlObj);
    }
}
module.exports = fixDropdowns;