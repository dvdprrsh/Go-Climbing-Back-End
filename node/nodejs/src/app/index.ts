import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

const app = express();

app.use(cors()); // Removes the cors issue
/**
 * https://github.com/expressjs/body-parser#bodyparserjsonoptions
 * read this to unders stand { json, urlencoded } imports used
 * below with express
 */
app.use(json());
app.use(urlencoded({ extended: true }));

// define a route handler
app.get('/:submissionID', async (req, res) => {
  console.log('GET SUBMISSION', req.params.submissionID);
  res.json({
    someData: 'TODO' // TODO:
  });
});

app.post('/', async (req, res) => {
  console.log('POSTED DATA', req.body);
  res.json({
    id: 'AN_ID',
    ...req.body
  });
});
export default app;
