
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express();
const request = require('request');
var router = express.Router();
const port = process.env.PORT || 9000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);


router.get('/information/:id', function(req,res) {
  const path = req.params.id;
  const url = `http://localhost:3400${path}`;
  request(newurl).pipe(res);
});
router.get('/pictures/:id', function(req,res) {
  const url = 'http://google.com/';
  request(newurl).pipe(res);
});
router.get('/title/:id', function(req,res) {
  const url = 'http://google.com/';
  request(newurl).pipe(res);
});
router.get('restaurants/:id/reviews', function(req,res) {
  const url = 'http://google.com/';
  request(newurl).pipe(res);
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
