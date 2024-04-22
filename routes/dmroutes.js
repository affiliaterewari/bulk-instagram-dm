// Import required libraries and modules
const express = require('express');
const dmController = require('../controllers/dmController');

// Create a new router instance
const router = express.Router();

// Define routes for sending bulk DMs
router.post('/bulk-dm', dmController.automateBulkDM);

// Add more routes as needed

// Export the router
module.exports = router;




