let removeText = require('./removeText.js');
let removeUnnecessaryPTags = require('./removeUnnecessaryPTags.js');
let fixTitle = require('./fixTitle.js');
let fixULTags = require('./fixULTags.js');
let fixDropdowns = require('./fixDropdowns');
let fixTables = require('./fixTables.js');
let fixContentLinks = require('./fixContentLinks.js');
let removeArrows = require('./removeArrows.js');
let replaceCodeBlocks = require('./replaceCodeBlocks.js');
let beautifyHTML = require('./beautifyHTML.js');

module.exports = function (htmlObj) {
    return [
        (callback) => callback(null, htmlObj),
        removeText,
        removeUnnecessaryPTags,
        fixTitle,
        fixULTags,
        fixDropdowns,
        fixTables,
        fixContentLinks,
        removeArrows,
        replaceCodeBlocks,
        beautifyHTML
    ];
};