const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

const Author = require('./models/Author');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: "Not Found" });

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: "Invalid data!" });
  }
  
  await Author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: "Author successfully created" });
});

app.listen(PORT, () => console.log('Listening on port', PORT));