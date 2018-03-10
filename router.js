const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/information/:id', function(req,res) {
  const path = req.params.id;
  const url = `http://localhost:3400/information/${path}`;
  request(url).pipe(res);
});
router.get('/pictures/:id', function(req,res) {
  const path = req.params.id;
  const url = `http://localhost:3000/pictures/${path}`;
  request(url).pipe(res);
});
router.get('/title/:id', function(req,res) {
  const path = req.params.id;
  const url = `http://localhost:3001/title/${path}`;
  request(url).pipe(res);
});
router.get('/map/:id', function(req,res) {
  const path = req.params.id;
  const url = `http://localhost:3001/map/${path}`;
  request(url).pipe(res);
});
router.get('/restaurants/:restaurantId/reviews', function(req,res) {
  const path = req.params.restaurantId;
  const url = `http://localhost:8001/restaurants/${path}/reviews`;
  request(url).pipe(res);
});
router.put('/restaurants/:restaurantId/reviews/:reviewId', function(req,res) {
  const path = req.params.restaurantId;
  const url = `http://localhost:8001/restaurants/${path}/reviews`;
  request(url).pipe(res);
});
router.post('/', function(req,res) {
  const path = req.params.restaurantId;
  const url = `http://localhost:3001/restaurants/${path}/reviews`;
  request(url).pipe(res);
});

module.exports = router;