const cheerio = require('cheerio');
const fs = require('fs');
let $;

function replaceCodeBlocks(htmlObj, callback) {
    $ = cheerio.load(htmlObj.htmlText);
    let wpSyntaxClasses = $('.wp_syntax');
    wpSyntaxClasses.each((i, element) => {
        let newElement = $(element);
        let actualCode = newElement.find('.theCode').text();
        let language = newElement.find('pre').attr('class');
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
            newElement.replaceWith(`<pre><code class="language-${languageMap[language]}">${actualCode}</code></pre>`);
        } else {
            newElement.replaceWith(`<pre><code class="language-markup">${actualCode}</code></pre>`);
        }
    });
    htmlObj.htmlText = $.html();
    callback(null, htmlObj);
}

module.exports = replaceCodeBlocks;