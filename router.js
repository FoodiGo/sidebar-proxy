const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/information/:id', (req, res) => {
  const path = req.params.id;
  const url = `http://foodigosidebar-env.us-east-2.elasticbeanstalk.com/information/${path}`;
  request(url).pipe(res);
});
router.get('/pictures/:id', (req, res) => {
  const path = req.params.id;
  const url = `http://foodigopictures.us-west-1.elasticbeanstalk.com/pictures/${path}`;
  request(url).pipe(res);
});
router.get('/title/:id', (req, res) => {
  const path = req.params.id;
  const url = `http://foodigotitle-env.us-west-1.elasticbeanstalk.com/title/${path}`;
  request(url).pipe(res);
});
router.get('/map/:id', (req, res) => {
  const path = req.params.id;
  const url = `http://foodigotitle-env.us-west-1.elasticbeanstalk.com/map/${path}`;
  request(url).pipe(res);
});
router.get('/restaurants/:restaurantId/reviews', (req, res) => {
  const path = req.params.restaurantId;
  const url = `http://foodigoreviews.us-west-1.elasticbeanstalk.com/restaurants/${path}/reviews`;
  request(url).pipe(res);
});
router.put('/restaurants/:restaurantId/reviews/:reviewId', (req, res) => {
  const path = req.params.restaurantId;
  const review = req.params.reviewId;
  const url = `http://foodigoreviews.us-west-1.elasticbeanstalk.com/restaurants/${path}/reviews/${review}`;
  request.post(url, { json: req.body })
    .pipe(res);
});
router.post('/restaurants/:restaurantId/reviews', (req, res) => {
  const path = req.params.restaurantId;
  const url = `http://foodigoreviews.us-west-1.elasticbeanstalk.com/restaurants/${path}/reviews`;
  request.post(url, { json: req.body })
    .pipe(res);
});
router.post('/', (req, res) => {
  const path = req.params.restaurantId;
  const url = `http://foodigotitle-env.us-west-1.elasticbeanstalk.com/${path}`;
  request(url)
    .pipe(res);
});

module.exports = router;
