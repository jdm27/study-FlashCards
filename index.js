const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;



console.log('study with me !');

routerApi(app);

app.use(express.json);
