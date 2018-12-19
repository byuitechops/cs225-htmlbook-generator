const main = require('./main.js');
const path = require('path');
const fs = require('fs');

function getInput(dir, callback) {
    let fileNames;
    let filePath = path.resolve(dir);
    try {
        fileNames = fs.readdirSync(filePath, 'utf-8');
    } catch (err) {
        return err;
    }
    fileNames.forEach(fileName => {
        fs.readFile(path.join(filePath, fileName), 'utf8', (err, htmlText) => {
            if (err) {
                callback(err);
            }
            callback(null, {
                fileName,
                htmlText
            }, getOutput);
        });
    });
}

function getOutput(err, htmlObj) {
    // How to output data, eg. to csv, to json, to console, etc.
    if (err) {
        console.error(err);
    } else {
        fs.writeFile(`./new_html_files/new_${htmlObj.fileName}`, htmlObj.htmlText, err => {
            if (err) {
                console.error(err);
            } else {
                console.log(`new_${htmlObj.fileName} successfully written`);
            }
        });
    }
    return;
}

(function () {
    getInput('./old_html_files', main);
})();