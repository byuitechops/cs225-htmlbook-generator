const cheerio = require('cheerio');
let $;

/************************************************
 *               replaceCodeBlocks
 * 
 * Parameters:
 *  1. htmlObj : Object
 *  2. callback : Function
 * 
 * Description:
 *  The replaceCodeBlocks function recieves an
 *  htmlObj and a callback function. The main
 *  purpose of this function is to replace the
 *  current CSS for codeblocks with the new CSS
 *  for codeblocks. To do this the function uses
 *  the Cheerio library to load the HTML, select
 *  the old codeblocks and replace the style
 *  with the new CSS.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
function replaceCodeBlocks(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let wpSyntaxClasses = $('.wp_syntax');
    wpSyntaxClasses.each(function () {
        let element = $(this);
        let actualCode = element.find('td.code').text();
        let language = element.find('pre').attr('class');
        let languageMap = {
            sql: 'sql',
            oracle11: 'sql',
            mysql: 'sql',
            oracle11i: 'sql',
            plsql: 'plsql',
            bash: 'bash',
            dos: 'powershell',
            php: 'php',
            html: 'html',
            java: 'java'
        };
        if (languageMap[language]) {
            element.replaceWith(`<pre><code class="language-${languageMap[language]}">${actualCode}</code></pre>`);
        } else {
            element.replaceWith(`<pre><code class="language-markup">${actualCode}</code></pre>`);
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = replaceCodeBlocks;