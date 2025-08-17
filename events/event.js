const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //register a listener
// emitter.on('messageLogged', (e) => {
//     console.log('Listener called', e);
// });

const Logger = require('../first/logger.js');
const logger = new Logger();

logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
});

logger.log('message');

// emitter.on('Logging', (e) => {
//     console.log('Listener called', e);
// });


// emitter.emit('Logging', {data: 'Logged successfully'});