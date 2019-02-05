const tasks = require('./tasks/tasks.js');
const waterfall = require('async/waterfall');

/************************************************
 *                    main()
 * 
 * Parameters:
 *  1. err : Error
 *  2. htmlObj : Object
 *  3. callback : Function
 * 
 * Description:
 *  The main function recieves an error, htmlObj,
 *  and a callback. If there was an error the
 *  function will call the callback function and
 *  pass the error to it. Otherwise the function
 *  will use the async libraries waterfall method
 *  to run the tasks on each HTML file.
 * 
 * Return Type:
 *  Void
 * 
 * Author(s):
 *  Cal Wilson
 *  Aaron Shiffler
 * 
 ************************************************/
module.exports = function (err, htmlObj, callback) {
    if (err) {
        callback(err);
        return;
    }
    waterfall(tasks(htmlObj), callback);
};