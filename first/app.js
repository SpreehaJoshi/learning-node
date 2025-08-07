const logger = require('./logger'); //const log= req('..) -> cuz of changes in logger.js

logger.log('message'); //calls log in logger.js that was imported, and passes 'message' as arg to then be displayed
//log('message') -> Refer to line 1