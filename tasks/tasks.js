let removeText = require('./removeText.js');
let fixDropdowns = require('./fixDropdowns');
let replaceCodeBlocks = require('./replaceCodeBlocks.js');

module.exports = function (htmlObj) {
    return [
        (callback) => callback(null, htmlObj),
        removeText,
        fixDropdowns,
        replaceCodeBlocks
    ];
};