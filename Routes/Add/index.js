/* jshint esversion : 6*/
var route = require('express').Router();
var Creator = new(require('../../Handlers/Add'))();

route.post('/', function(req, res) {
    try {        
        Creator.CreateLog(req.body).then(log => {
            res.status(201).send(log);
        }).catch(err => {
            return res.status(400).send({ "error " : err });
        });
    } catch (ex) {
        return res.status(500).send({ "error " : ex });
    }
});

route.post('/:id', function(req, res) {
    try {
        Creator.CreateLogWithId(req.body, req.params.id).then(log => {
            return res.status(201).send(log);
        }).catch(err => {
            return res.status(400).send({"error " : err });
        });
    } catch (ex) {
        return res.status(500).send({ "error " : ex });
    }
});

module.exports = route;