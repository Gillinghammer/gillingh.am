var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  // detect browser language settings
  var lang = req.headers["accept-language"].substring(0, 2);

  // redirect to portuguese page if pt language is detected
  if(lang === "pt"){
    res.redirect('/pt');
  } else {
    res.render('index');
  }

});

/* GET home page. */
router.get('/pt', function(req, res, next) {
  res.render('indexpt');
});

module.exports = router;
