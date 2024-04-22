/// Import required libraries
const puppeteer = require('puppeteer');

// Define and export the automation service functions
module.exports = {
  // Function to perform bulk DM automation
  async bulkDM(usernames, message) {
    try {
      // Initialize Puppeteer and launch a new browser instance
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // Perform bulk DM automation
      for (const username of usernames) {
        // Search for the user
        await page.goto(`https://www.instagram.com/${username}`);
        await page.waitForSelector('button[type="button"]');

        // Open the user's profile
        await page.click('button[type="button"]');
        await page.waitForSelector('button[type="button"][aria-label="Message"]');

        // Click the message button
        await page.click('button[type="button"][aria-label="Message"]');
        await page.waitForSelector('textarea[placeholder="Message..."]');

        // Type and send the message
        await page.type('textarea[placeholder="Message..."]', message);
        await page.keyboard.press('Enter');
      }

      // Close the browser
      await browser.close();

      // Return a success message
      return { message: 'Bulk DM automation completed successfully' };
    } catch (error) {
      // Handle any errors that occur during the automation
      console.error(error);
      throw new Error('Failed to perform bulk DM automation');
    }
  }
};
