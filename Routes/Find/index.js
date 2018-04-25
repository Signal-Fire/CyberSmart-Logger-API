var route = require('express').Router();
var Finder = new(require('../../Handlers/Find'))();

route.get('/all', function(req, res) {
    try {
        Finder.FindAll().then(logs => {
            res.status(200).send(logs);
        }).catch(err => {
            res.status(404).send({ error : err});
        });
    } catch (ex) {
        res.status(500).send({ error : ex });
    }
});

route.get('/user/:user', function(req, res) {
    try {
        Finder.FindByCreatedUser(req.params.user).then(logs => {
            res.status(200).send(logs);
        }).catch(err => {
            res.status(404).send({ error : err});
        });
    } catch (ex) {
        res.status(500).send({ error : ex });
    }
});

route.get('/:id', function(req, res) {
    try {
        Finder.FindById(req.params.id).then(logs => {
            res.status(200).send(logs);
        }).catch(err => {
            res.status(404).send({ error : err});
        });
    } catch (ex) {
        res.status(500).send({ error : ex });
    }
});

module.exports = route;