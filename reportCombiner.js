const fs = require('fs');
const d3 = require('d3-dsv');

function readDirectory() {
    return fs.readdirSync('./reports', 'utf8').map(file => {
        console.log(file);
        return JSON.parse(fs.readFileSync(`./reports/${file}`, 'utf8'));
    });
}

function combineJSONFiles(files) {
    let data = [];
    files.forEach(file => {
        file.forEach(item => {
            data.push(item);
        });
    });
    return data;
}

function writeFile(data) {
    let csvString = d3.csvFormat(data);
    fs.writeFileSync(`./reports/external_content${Date.now()}.csv`, csvString, 'utf8');
}

function main() {
    let files = readDirectory();
    let data = combineJSONFiles(files);
    writeFile(data);
}

main();