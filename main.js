/*************************************************************************
 * Module Description
 *************************************************************************/
const tasks = require('./tasks/tasks.js');
const waterfall = require('async/waterfall');

module.exports = function (err, htmlObj, callback) {
    if (err) {
        callback(err);
        return;
    }
    waterfall(tasks(htmlObj), callback);
};