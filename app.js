const express = require('express'),
    app = express(),
    appPort = 8000;

app.get('/', (req, res) => {
    res.json({message: 'Welcome to express'})
});

app.listen(appPort, (() => console.log(`Express running on ${appPort} port`)));
