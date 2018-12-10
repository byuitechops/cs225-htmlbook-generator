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
            oracle11: 'sql'
        }
        newElement.replaceWith(`<pre><code class='langauge-${languageMap[language]}'>${actualCode}</code></pre>`);
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