/* jshint esversion: 6*/
var express = require('express'),
    app = express(),
    cors = require('cors');

app.use(cors());

const port = 8081;

app.listen(port, () => {
    console.log('[LOGGER] There are ' + port + ' White Walkers on their way! Listen up!');
})
