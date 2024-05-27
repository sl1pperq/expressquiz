var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/more', function (req, res, next) {
  res.render('more')
})

module.exports = router;
