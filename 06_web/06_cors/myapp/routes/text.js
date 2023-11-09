const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.text({ type: 'text/plain' }));

router.post('/', (req, res) => {
  console.log('Request Body:', req.body);
  res.send(req.body);
});

module.exports = router;
