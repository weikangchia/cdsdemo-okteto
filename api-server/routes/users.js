var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    names: [
      {
        name: 'Alice'
      },
      {
        name: 'Bob'
      },
      {
        name: 'Cindy'
      }
    ],
    hiddenFlag: true
  });
});

module.exports = router;
