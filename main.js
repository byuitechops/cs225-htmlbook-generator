/*************************************************************************
 * Module Description
 *************************************************************************/
const tasks = require('./tasks/tasks.js');
const fs = require('fs');

function readFile(callback) {
    fs.readFile('./html_files/index.html', 'utf-8', (err, html) => {
        if (err) {
            callback(err, null);
        }
        callback(null, html);
    });
}

module.exports = {
    main(args) {
        readFile((err, html) => {
            if (err) {
                console.log(err);
                return;
            }
            tasks.replaceCodeBlocks(html)
                .then(console.log)
                .catch(console.error);
            console.log(html);
        });
        return 0;
    }
};