// 2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os 
// dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, 
// rejeite a Promise com o motivo "id não encontrado".

async function getSimpsonById(id) {
  const simpsons = await fs.readFile('simpsons.json', 'utf8')
    .then((fileContent) => JSON.parse(fileContent))

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id)

  if (!chosenSimpson) {
    throw new  Error('id nao encontrado')
  }

  return chosenSimpson;
}

async function callFunction() {
  try {
    const result = await getSimpsonById('5')
    console.log(result)
  } catch (err) {
    console.error(err)
  }
}
callFunction();
