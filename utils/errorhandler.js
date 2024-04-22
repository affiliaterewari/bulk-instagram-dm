// Define standardized error handling functions
module.exports = {
  // Function to handle internal server errors
  handleInternalError(err, req, res, next) {
    console.error(err);

    // Log the error if logging functionality is implemented

    res.status(500).json({ error: 'Internal Server Error' });
  },

  // Function to handle validation errors
  handleValidationError(err, req, res, next) {
    console.error(err);

    // Log the error if logging functionality is implemented

    res.status(400).json({ error: 'Validation Error', details: err.message });
  },

  // Function to handle authentication errors
  handleAuthenticationError(err, req, res, next) {
    console.error(err);

    // Log the error if logging functionality is implemented

    res.status(401).json({ error: 'Authentication Error', details: err.message });
  },

  // Add more error handling functions as needed
};




