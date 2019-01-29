let removeText = require('./removeText.js');
let removeUnnecessaryPTags = require('./removeUnnecessaryPTags.js');
let fixULTags = require('./fixULTags.js');
let fixDropdowns = require('./fixDropdowns');
let removeArrows = require('./removeArrows.js');
let fixTables = require('./fixTables.js');
let replaceCodeBlocks = require('./replaceCodeBlocks.js');

module.exports = function (htmlObj) {
    return [
        (callback) => callback(null, htmlObj),
        removeText,
        removeUnnecessaryPTags,
        fixULTags,
        fixDropdowns,
        removeArrows,
        fixTables,
        replaceCodeBlocks
    ];
};