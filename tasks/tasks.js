let removeText = require('./removeText.js');
let removeUnnecessaryPTags = require('./removeUnnecessaryPTags.js');
let fixULTags = require('./fixULTags.js');
let fixTitle = require('./fixTitle.js');
let fixDropdowns = require('./fixDropdowns');
let fixTables = require('./fixTables.js');
let replaceCodeBlocks = require('./replaceCodeBlocks.js');

module.exports = function (htmlObj) {
    return [
        (callback) => callback(null, htmlObj),
        removeText,
        removeUnnecessaryPTags,
        fixULTags,
        //fixTitle,
        fixDropdowns,
        fixTables,
        replaceCodeBlocks
    ];
};