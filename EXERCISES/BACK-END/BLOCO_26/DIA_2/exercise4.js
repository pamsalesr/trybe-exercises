// 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . 1 - Homer Simpson .
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((fileContent) => {
    return JSON.parse(fileContent)
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });