var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    appName: 'QRittā API',
    version: process.env.npm_package_version,
    status: 'OK'
  })
});

module.exports = router;
