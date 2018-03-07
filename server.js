const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;
const router = require('./router.js');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});

module.exports = app;