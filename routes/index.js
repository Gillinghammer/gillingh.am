var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { foo: 'bar' });
});

/* Send Email */
router.post('/', handleSayHello );

var gmailpass = process.env.GMAILPASS;
console.log("\n\nyour password from process.env.GMAILPASS is " + gmailpass);

function handleSayHello(req, res) {

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'colingillingham@gmail.com',
      pass: gmailpass
    }
  });

  var text = "hello portugal from \n\n" + req.body.email + "\n\n" + req.body.message;
  var mailOptions = {
    from: "blahblah@gmail.com",
    to: "colingillingham@gmail.com",
    subject: "Email Example",
    text: text
  };

  transporter.sendMail( mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    } else {
      console.log('Message sent: ' + info.response);
      res.redirect('/');
    }
  })

}

module.exports = router;
