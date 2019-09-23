var express = require('express');
var router = express.Router();


var argName = {
  title: 'Becca',
  color: "Blue" 
}
var argNameColor = {
  title: 'Becca',
  color: "Blue" 
}

var renderfunkName = function(req, res, next) {
  res.render('index', argName);
};
var renderfunkColor = function(req, res, next) {
  res.render('index', argNameColor);
};

/* GET home page. */
router.get('/', renderfunkName);

router.get('/color/', renderfunkColor);

module.exports = router;
