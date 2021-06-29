const express = require('express');
const app = express();

const helloMiddleware = (req, res) => {
  const { name } = req.body;
  res.status(200).send({ "message": `Hello, ${name}!` })
}

app.get('/ping', (_req, res) => {
  res.json({ "message": 'pong' })
});

app.post('/hello', helloMiddleware);

app.post('/greetings', )

app.listen(3000, () => { // binding
  console.log('Aplicação ouvindo na porta 3000');
});
