import axios from 'axios';
import express from 'express';

const router = express.Router();
const apiKey = process.env.NEWS_API_KEY;

router.get('/top', async (req, res) => {
  try {
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    if (!newsResponse.data.articles.length) {
      return res.status(400).send({
        message: 'Invalid request'
      });
    }
    res.send({ response: newsResponse.data });
  } catch (error) {
    console.log(error);
  }
});

router.get('/sources', async (req, res) => {
  try {
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/sources?language=en&country=us&apiKey=${apiKey}`
    );
    if (!newsResponse.data.sources.length) {
      return res.status(400).send({
        message: 'Invalid request'
      });
    }
    res.send({ response: newsResponse.data });
  } catch (error) {
    console.log(error);
  }
});

router.get('/sources/:source', async (req, res) => {
  try {
    console.log(req.params);
    const source = req.params.source;
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
    );
    if (!newsResponse.data.articles.length) {
      return res.status(400).send({
        message: 'Invalid request'
      });
    }
    res.send({ response: newsResponse.data });
  } catch (error) {
    console.log(error);
  }
});

export { router as articleRoute };
