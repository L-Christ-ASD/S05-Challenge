import express from 'express';

const SERVER_PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening at http://localhost:${SERVER_PORT}`);
});