const cheerio = require('cheerio');
let $;

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