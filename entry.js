const main = require('./main.js');
const path = require('path');
const fs = require('fs');
const recursive = require('recursive-readdir');
const writeFile = require('write');

/************************************************
 *                   getInput()
 * 
 * Parameters:
 *  1. dir : String
 *  2. callback : Function
 * 
 * Description:
 *  The getInput function recieves a directory's
 *  path and a callback function as parameters. It
 *  then uses the recursive-readdir library to 
 *  read in HTML filepaths that are underneith the 
 *  passed in directory recursively. Once all
 *  filepaths have been readIn the function uses
 *  the fs library to read the contents of each
 *  file. The callback function is then called
 *  with an htmlObj attached to it. The htmlObj
 *  contains the filepath and the html text that
 *  was read in.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 *  Aaron Shiffler
 * 
 ************************************************/
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
                    //filePath = filePath.slice([filePath.search(/db1/g)]);
                    // DB2 CODE
                    filePath = filePath.slice([filePath.search(/db2/g)]);
                    callback(null, {
                        filePath,
                        htmlText,
                        externalContent: []
                    }, getOutput);
                });
            });
        }
    });
}

/************************************************
 *                  getOutput()
 * 
 * Parameters:
 *  1. err : Error
 *  2. htmlObj : Object
 * 
 * Description:
 *  The getOutput function receives an error and
 *  the final iteration of an htmlObj. If there
 *  was an error the function will log the error.
 *  If no error was found the function will write
 *  the file using the filepath and htmlText that
 *  is stored on the htmlObj. If the write is
 *  successful it will log a success statement If
 *  there was an error the function will log the 
 *  error.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 *  Aaron Shiffler
 * 
 ************************************************/
function getOutput(err, htmlObj) {
    // How to output data, eg. to csv, to json, to console, etc.
    if (err) {
        console.error(err);
    } else {
        writeFile(`./new_html_files/${htmlObj.filePath}`, htmlObj.htmlText, err => {
            if (err) {
                console.error(err);
            } else {
                console.log(`HTML file successfully written: ${htmlObj.filePath}`);
                if (htmlObj.externalContent.length > 0) {
                    fs.writeFileSync(`./reports/externalContent_${Date.now()}.json`, JSON.stringify(htmlObj.externalContent));
                }
            }
        });

        // DB2 CODE
        // writeFile(`C:/Users/kilakal/Documents/work/db2/${htmlObj.filePath}`, htmlObj.htmlText, err => {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         console.log('HTML file successfully written');
        //     }
        // });
    }

    return;
}

(function () {
    // getInput('C:/Users/kilakal/Documents/Eqella/CIT_225_Textbook/db1', main);
    getInput('./html_files/michaelmclaughlin.info/TChanger_template/db1', main);

    // DB2 CODE
    // getInput('C:/Users/kilakal/Documents/Eqella/CIT 325 Textbook/db2/cit-325-lab-instructions', main);
})();