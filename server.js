/* jshint esversion: 6*/
var express = require('express'),
    app = express(),
    cors = require('cors'),
    config = require('./Configuration'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    Add_Routes = require('./Routes/Add'),
    Find_Routes = require('./Routes/Find');

app.use(bodyParser.json());

app.use(cors());
app.use(compression());

app.use('/find', Find_Routes);
app.use('/create', Add_Routes);

app.listen(config.port, () => {
    console.log('[LOGGER] There are ' + config.port + ' White Walkers on their way! Listen up!');
});
