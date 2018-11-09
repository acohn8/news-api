import 'dotenv/config';
import express from 'express';
import { articleRoute } from './controllers/articles';

const app = express();
const port = 3000;

app.use('/api/v1/articles', articleRoute);

app.listen(port, () => {
  console.log('App listening on port 3000');
});
