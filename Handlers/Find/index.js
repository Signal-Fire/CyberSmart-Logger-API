/* jshint esversion : 6*/
var Log = require('../../Models/Log');

class Find {
    constructor() {

    }

    FindAll() {
        return new Promise(function(resolve, reject) {
            Log.find({}, function(err, result) {
                if (err || result === null)
                    return reject("Unable to return any logs");

                return resolve(result);
            });
        });
    }

    FindByCreatedUser(user) {
        return new Promise(function(resolve, reject) {
            Log.find({ created_by_user : user }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to return any logs");
                
                return resolve(result);
            });
        });
    }

    FindById(id) {
        return new Promise(function(resolve, reject) {
            Log.findById(id, function(err, result) {
                if (err || result === null)
                    return reject("Unable to return any logs");

                return resolve(result);
            });
        });
    }
}

module.exports = Find;