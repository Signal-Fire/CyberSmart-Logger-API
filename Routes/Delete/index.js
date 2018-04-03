/* jshint esversion: 6*/
var route = require('express').Router();
var Deleter = new(require('../../Handlers/Delete'))();

route.post('/all', function(req, res) {
    try {
        Deleter.DeleteAll().then(deleted => {
            res.status(200).send(deleted);
        }).catch(err => {
            res.status(404).send({"error" : err });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});

route.post('/:id', function(req, res) {
    try {
        Deleter.DeleteById(req.params.id).then(deleted => {
            res.status(200).send(deleted);
        }).catch(err => {
            res.status(404).send({"error" : err });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});

module.exports = route;