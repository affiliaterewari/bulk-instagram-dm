// Import required libraries and services
const automationService = require('../services/automationService');

// Define and export the controller functions
module.exports = {
  // Controller function to handle bulk DM automation
  async automateBulkDM(req, res) {
    try {
      // Extract necessary data from the request
      const { usernames, message } = req.body;

      // Validate the input data
      if (!usernames || !message) {
        return res.status(400).json({ error: 'Invalid input data' });
      }

      // Perform the bulk DM automation using the automation service
      const result = await automationService.bulkDM(usernames, message);

      // Send the result back to the extension
      res.json(result);
    } catch (error) {
      // Handle any errors that occur during the execution
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Controller function to handle other types of requests
  async otherRequestHandler(req, res) {
    try {
      // Extract necessary data from the request
      const { param1, param2 } = req.body;

      // Validate the input data
      if (!param1 || !param2) {
        return res.status(400).json({ error: 'Invalid input data' });
      }

      // Perform the necessary actions based on the request
      // Example: Call a service function to process the request
      const result = await automationService.processRequest(param1, param2);

      // Send the result back to the extension
      res.json(result);
    } catch (error) {
      // Handle any errors that occur during the execution
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};



