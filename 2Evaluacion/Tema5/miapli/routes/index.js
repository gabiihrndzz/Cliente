var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dei V', subtitle: 'UnderWater' });
});

module.exports = router;
