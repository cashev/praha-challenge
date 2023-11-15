var express = require('express');
var axios = require('axios');
var router = express.Router();

var imageBuffer = null;
axios({
  method: 'get',
  url: 'https://picsum.photos/200/300',
  responseType: 'arraybuffer', // Set the response type to arraybuffer for binary data
})
.then(response => {
  imageBuffer = Buffer.from(response.data, 'binary');
})
.catch(error => {
  console.log(error);
});

/* GET image. */
router.get('/', function(req, res, next) {
  res.set('Cache-Control', 'no-store');
  res.set('Content-Type', 'image/jpeg');
  res.send(imageBuffer);
});

module.exports = router;
