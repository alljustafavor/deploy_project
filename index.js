const express = require('express');

const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
  res.json('Hello, World!');
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
