const beautify = require('js-beautify').html;

function beautifyHTML(htmlObj, callback) {
    htmlObj.htmlText = beautify(htmlObj.htmlText, {
        max_preserve_newlines: 0,
        wrap_line_length: 100
    });
    callback(null, htmlObj);
}

module.exports = beautifyHTML;