const express = require('express');
const bodyParser = require('body-parser');
const dmRoutes = require('./routes/dmRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Define routes
app.use('/dm', dmRoutes);

// Error handling middleware
app.use(errorHandler.handleInternalError);
app.use(errorHandler.handleValidationError);
app.use(errorHandler.handleAuthenticationError);

// Enable CORS for specific routes (e.g., for /dm endpoints)
app.use('/dm', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'chrome-extension://eibpkafikdjdljminmglgoicihgibkae');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
