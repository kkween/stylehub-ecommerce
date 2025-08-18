const express = require('express');
const router = express.Router();
const { getAdminDashboard } = require('../controllers/adminController');

// Example admin dashboard route
router.get('/dashboard', getAdminDashboard);

module.exports = router;
