var express = require('express');
var router = express.Router();
// betöltjük a usert
var User = require('../model/user.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//regiszter new user
router.post('/register', (req, res, next) => {
//regisztráljuk az új usert
  User.register({
    username: req.body.username,
    email: req.body.email,
    email: req.body.address,
  }, req.body.password, function (err, newUser) {
    if (err) {
      return res.json({
        error: 'Bad registration data'
      });
    }

    var authenticate = User.authenticate();
    authenticate(req.body.username, req.body.password, function (err, result) {
      if (err) {
        return res.json({
          error: 'User not autenticated'
        });
      }
      res.json(newUser);
    });
  });
});


module.exports = router;