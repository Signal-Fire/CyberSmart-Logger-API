var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../Configuration');
var conn = mongoose.createConnection(config.database);

var Schema = mongoose.Schema;

var LogSchema = new Schema({
    log_detail_id : {
        type : String,
        default : null
    },
    message: {
        type: String,
        required: true
    },
    created_by_user: {
        type: String,
        required: true
    },
    type : {
        type : String,
        required: true,
        default : "Default"
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = conn.model('Log', LogSchema);