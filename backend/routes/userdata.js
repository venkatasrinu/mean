var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("hhhhhhhhhhhhhhh")
  res.render('index', { title: 'node js' });
});
/*--------------*/
router.get('/getname', function(req, res, next) {
  console.log("new url working")
  res.render('index', { title: 'getname' });
});

module.exports = router;
