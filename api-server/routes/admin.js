var express = require('express');
var router = express.Router();

/* GET admin listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      name: 'Bob'
    },
    {
      name: 'Cindy'
    }
  ]);
});

module.exports = router;
