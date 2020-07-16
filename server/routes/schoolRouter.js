const express = require('express');
const schoolService = require('../services/schoolService');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const response = await schoolService.getAllSchools();
  res.send(response);
});

router.get('/:id', async (req, res, next) => {
  const response = await schoolService.getSchoolById(req.params.id);
  console.log(response);
  res.send(response);
});

router.post('/', (req, res, next) => {
  schoolService.addSchool(req.body);
  res.send('Add school');
});

module.exports = router;
