var express = require('express');
var router = express.Router();
var request = require('request');

/* GET image. */
router.get('/', function(req, res, next) {
  res.cookie('name', 'fuga', {maxAge: 1000 * 60, httpOnly: true, sameSite: 'none', secure: true});
  request('https://picsum.photos/200/300', { encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Set the Content-Type header to indicate that the response is an image
      res.set('Content-Type', 'image/jpeg');

      // Send the image binary data as the response
      res.send(body);
    } else {
      res.status(404).send('Image not found');
    }
  });
});

module.exports = router;
