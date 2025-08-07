//creating module

var url = 'http://madethisup.com/log';

function log(message){
    console.log(message);
}

module.exports.log = log;

//module.exports = log; -> cuz there is only one function to be exported