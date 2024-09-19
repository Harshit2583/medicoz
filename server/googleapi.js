require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch'); // You can use node-fetch to make requests
const cors = require('cors');
const app = express();
const PORT = 2000; // Use any port you like

// Enable CORS for all requests
app.use(cors());

// Proxy endpoint to Google Places API
app.get('/api/doctor', async (req, res) => {
  const description2 = req.query.description2;
  console.log(description2)
  try {
    // Make a request to the Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.2245%2C75.7718&radius=1500&${description2}&key=${process.env.GOOGLE_PLACES_API_KEY}`
    );
    
    const data = await response.json(); // Get the data in JSON format
    res.json(data); // Send the data back to the frontend
  } catch (error) {
    console.error('Error fetching doctor data:', error);
    res.status(500).json({ error: 'Error fetching doctor data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
