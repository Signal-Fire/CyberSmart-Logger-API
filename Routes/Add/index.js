var route = require('express').Router(),
    Creator = new(require('../../Handlers/Add'))();

route.post('/', function(req, res) {
    try {        
        Creator.CreateLog(req.body).then(log => {
            res.status(201).send(log);
        }).catch(err => {
            res.status(405).send({ error : err });
        });
    } catch (ex) {
        res.status(500).send({ex : ex});
    }
});

route.post('/:id', function(req, res) {
    try {
        Creator.CreateLogWithId(req.body, req.params.id).then(log => {
            return res.status(201).send(log);
        }).catch(err => {
            return res.status(400).send({ error  : err });
        });
    } catch (ex) {
        return res.status(500).send({ error  : ex });
    }
});

module.exports = route;