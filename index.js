const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(serveStatic('./', { 'index': ['index.html'] }));

app.listen(3001, ()=> {
    console.log('Server started at port 3001');
})