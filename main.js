/*************************************************************************
 * Module Description
 *************************************************************************/
const tasks = require('./tasks/tasks.js');

module.exports = {
    main(args) {
        tasks.replaceCodeBlocks();
        return 0;
    }
};