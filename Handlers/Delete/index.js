var Log = require('../../Models/Log');

module.exports = class Delete {
    constructor() {

    }
    
    DeleteAll() {
        return new Promise(function(resolve, reject) {
            Log.remove({}, function(err, result) {
                if (err || result === null) 
                    return reject("Unable to delete logs");

                return resolve(result);
            });
        });
    }

    DeleteById(id) {
        return new Promise(function(resolve, reject) {
            Log.findByIdAndRemove(id, function(err, result) {
                if (err || result === null) 
                    return reject("Unable to delete log with ID: " + id);

                return resolve(result);
            });
        });
    }
};