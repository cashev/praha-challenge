var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('name', 'hoge', {maxAge: 1000 * 60, httpOnly: true});
  res.render('index', { title: 'Express' });
});

module.exports = router;
