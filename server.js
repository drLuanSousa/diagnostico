const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/news', async (req, res) => {
  try {
    const apiKey = '8cebe93868874144a07b1d399f742bdb';
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
    }));
    res.json({ articles });
  } catch (error) {
    res.status(500).send('Error fetching news articles');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
