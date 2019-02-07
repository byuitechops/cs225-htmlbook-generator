let removeText = require('./removeText.js');
let removeUnnecessaryPTags = require('./removeUnnecessaryPTags.js');
let removeScripts = require('./removeScripts.js');
let fixTitle = require('./fixTitle.js');
let fixULTags = require('./fixULTags.js');
let fixDropdowns = require('./fixDropdowns');
let fixTables = require('./fixTables.js');
let fixContentLinks = require('./fixContentLinks.js');
let removeArrows = require('./removeArrows.js');
let replaceCodeBlocks = require('./replaceCodeBlocks.js');
let beautifyHTML = require('./beautifyHTML.js');

/************************************************
 *                   tasks()
 * 
 * Parameters:
 *  1. htmlObj : Object
 * 
 * Description:
 *  The tasks function receives an htmlObj. The
 *  tasks function's main purpose is to return
 *  an array of tasks. The first function in
 *  the array is a "dummy" function. It's sole
 *  purpose is to pass the htmlObj into the first
 *  task, removeText.
 * 
 * Return Type:
 *  Array<Function>
 * 
 * Author(s):
 *  Cal Wilson
 * 
 ************************************************/
module.exports = function (htmlObj) {
    return [
        (callback) => callback(null, htmlObj),
        removeText,
        removeUnnecessaryPTags,
        removeScripts,
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