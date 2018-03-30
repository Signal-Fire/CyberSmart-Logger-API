/* jshint esversion: 6*/
var Log = require('../../Models/Log');

class Add {
    constructor() {

    }

    CreateLog(log) {
        console.log(log);
        return new Promise(function(resolve, reject) {
            var newLog = new Log(log);
            newLog.save(function(err, result) {
                if (err || result === null)
                    return reject("Unable to save log");

                return resolve(result);
            });
        });
    }
}

module.exports = Add;