const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;





routerApi(app);

app.listen(port, () => {
  console.log('port:' + port);

});


app.get('/', (req, res) => {
  res.send('Hi, this is study flaschcards');

});

app.use(express.json);
