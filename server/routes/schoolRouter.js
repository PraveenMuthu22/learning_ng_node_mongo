const express = require('express');
const schoolService = require('../services/schoolService');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('All schools');
});

router.get('/:searchString', async (req, res, next) => {
  const response = await schoolService.searchSchoolByName(req.params.searchString);
  console.log(response);
  res.send(response);
});

router.post('/', (req, res, next) => {
  schoolService.addSchool(req.body);
  res.send('Add school');
});

module.exports = router;
