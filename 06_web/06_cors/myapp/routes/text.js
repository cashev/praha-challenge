const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.text({ type: 'text/plain' }));

router.post('/', (req, res) => {
  res.send(req.body);
});

module.exports = router;
