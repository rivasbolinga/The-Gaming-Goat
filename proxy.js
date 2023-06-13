import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/games', async (req, res) => {
  try {
    const API_KEY = 'hd1x6mhr50l13xsryrl8ndhuh13x14';
    const API_ENDPOINT = 'https://api.igdb.com/v4/games/';

    const headers = {
      'Client-ID': 'wmwnaggf4484hypp2bnbbhsjqqz1ya',
      Authorization: `Bearer ${API_KEY}`,
      Accept: 'application/json',
    };

    const gamesResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: headers,
      body: 'fields *;',
    });

    const gamesData = await gamesResponse.json();
    const gamesWithImages = await Promise.all(
      gamesData.map(async (game) => {
        const imagesResponse = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: headers,
          body: `fields screenshots.*; where id = ${game.id};`,
        })

        const imagesData = await imagesResponse.json();
        // const screenshots = imagesData[0]?.screenshots || [];
        // const images = screenshots.map((screenshot) => screenshot.image_id)

        return { ...game, imagesData };
      })
    );

    res.json(gamesWithImages);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const port = 3001; // Choose a port for your proxy server
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

