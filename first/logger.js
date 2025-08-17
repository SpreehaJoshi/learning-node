const EventEmitter = require('events');

//creating module
var url = 'http://madethisup.com/log';

class Logger extends EventEmitter {

log(message){ //method of class logger
    console.log(message);

    //raise an event
    this.emit('messageLogged', {id: 1, url: 'http://'});
}
}

module.exports = Logger;

//module.exports = log; -> cuz there is only one function to be exported