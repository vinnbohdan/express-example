const models = require('../models');
const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  models.User.findAll({
    include: [models.Task],
  }).then((users) => {
    res.json(users);
  });
});

module.exports = router;
