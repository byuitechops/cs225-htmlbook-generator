const cheerio = require('cheerio'),
    fs = require('fs');
var $;

function editBlock() {
    let wpSyntaxClasses = $('.wp_syntax');
    wpSyntaxClasses.each((i, element) => {
        let newElement = $(element)
        let actualCode = newElement.find('.theCode').text();
        let language = newElement.find('pre').attr('class');
        let languageMap = {
            sql: ' class="langauge-sql"',
            oracle11: ' class="langauge-sql"',
            mysql: ' class="langauge-sql"',
            oracle11i: ' class="langauge-sql"',
            plsql: ' class="langauge-plsql"',
            bash: ' class="langauge-bash"',
            dos: ' class="langauge-powershell"',
            php: ' class="langauge-php"',
            html: ' class="langauge-html"',
            java: ' class="langauge-java"'

            //NOTE: for .txt, .text, .test, and any other mistyped classes that may arise
            //[`${}`]: ''
        }
        newElement.replaceWith(`<pre><code${languageMap[language]}>${actualCode}</code></pre>`);
    });
    console.log($.html());
}

function replaceCodeBlocks() {
    fs.readFile('./html_files/index.html', 'utf-8', (err, html) => {
        if (err) {
            console.error(err);
            return;
        }
        $ = cheerio.load(html);
        editBlock();
    });

}


module.exports = replaceCodeBlocks;