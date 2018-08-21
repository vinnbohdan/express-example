const express = require('express');

const authRoutes = require('./auth');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount auth routes at /auth
router.use('/api/auth', authRoutes);

module.exports = router;
