var Log = require('../../Models/Log');

class Add {
    constructor() {

    }

    CreateLog(log) {
        return new Promise(function(resolve, reject) {
            var newLog = new Log(log);
            newLog.save(function(err, result) {
                if (err || result === null)
                    return reject(err);

                return resolve(result);
            });
        });
    }
}

module.exports = Add;