const main = require('./main.js');
const path = require('path');
const fs = require('fs');
const recursive = require('recursive-readdir');
const writeFile = require('write');


function getInput(dir, callback) {
    let rFilePath = path.resolve(dir);
    recursive(rFilePath, (err, filePaths) => {
        if (err) {
            callback(err, null, getOutput);
        } else {
            filePaths.forEach(filePath => {
                fs.readFile(filePath, 'utf8', (err, htmlText) => {
                    if (err) {
                        callback(err, null, getOutput);
                    }
                    filePath = filePath.slice([filePath.search(/michaelmclaughlin.info/g)]);
                    callback(null, {
                        filePath,
                        htmlText
                    }, getOutput);
                });
            });
        }
    });
}

function getOutput(err, htmlObj) {
    // How to output data, eg. to csv, to json, to console, etc.
    if (err) {
        console.error(err);
    } else {
        writeFile(`./new_html_files/${htmlObj.filePath}`, htmlObj.htmlText, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('HTML file successfully written');
            }
        });
    }
    return;
}

(function () {
    getInput('./html_files/TChanger_template/michaelmclaughlin.info', main);
})();