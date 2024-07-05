const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

// Random Joke Endpoint
app.get('/api/jokes/random', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    res.json(jokeResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching random joke' });
  }
});

// Random Image Endpoint
app.get('/api/images/random', async (req, res) => {
  try {
    // Fetch a random image from Lorem Picsum
    const imageResponse = await axios.get('https://picsum.photos/200/300', {
      responseType: 'arraybuffer'
    });

    // Get the final image URL
    const imageUrl = imageResponse.request.res.responseUrl;

    // Send the image URL as JSON
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching random image' });
  }
});

// Combined Random Joke and Image Endpoint
app.get('/api/jokes-and-images/random', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    const imageResponse = await axios.get('https://picsum.photos/200/300', {
      responseType: 'arraybuffer'
    });

    const imageUrl = imageResponse.request.res.responseUrl;

    res.json({
      joke: jokeResponse.data,
      imageUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching joke and image' });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
