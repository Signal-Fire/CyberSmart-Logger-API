/* jshint esversion : 6*/
var route = require('express').Router();
var Creator = new(require('../../Handlers/Add'))();

route.post('/create', function(req, res) {
    try {        
        Creator.CreateLog(req.body).then(log => {
            res.status(201).send(log);
        }).catch(err => {
            res.status(405).send("{ error : " + err + " }");
        });
    } catch (ex) {
        res.status(500).send("{ error : " + ex + " }");
    }
});

module.exports = route;