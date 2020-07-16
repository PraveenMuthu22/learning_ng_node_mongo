const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('All schools');
});

router.get('/:schoolId', (req, res, next) => {
  res.send(`Specific school : ${req.params.schoolId}`);
});

router.post('/', (req, res, next) => {
  res.send('Add school');
});

module.exports = router;
