const express = require('express');
const schoolService = require('../services/schoolService');
const messages = require('../constants/messages');

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

router.post('/', async (req, res, next) => {
  const response = await schoolService.addSchool(req.body);
  console.log('response', response);
  if (response === 200) {
    res.send(200);
  } else {
    res.status(500).send(response);
  }
});

module.exports = router;
