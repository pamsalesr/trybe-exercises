const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {                                // Transforma a funcao em assincrona
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {  // aqui e o endpoint.
      fetch(url)    // Se o endpoint for correto, usamos o fetch para fazer uma chamada a esse endpoint.
        .then((r) => r.json())  // transformamos a resposta em um json utilizando o método .json()
        .then((r) => resolve(r.value));  //  usamos o resolve para retornar a nossa resposta
    } else {                    // Caso o url não seja o certo, levantamos um error. 
      reject(new Error('endpoint não existe'));  // usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática!
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna"); // Quando a gente executa a funcao, como a verifiedFetch() tem uma promisse (ou seja, e assincrona), ela vai para segundo plano,
                          // e a sendJokeToFriend e executada, exibindo um console.log 'pending' pois ela ainda nao recebeu a resposta da message.

// REFATORANDO A FUNCAO ANTERIOR, UTILIZANDO ASSYNC E AWAIT!

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");
// Usando o await , o sendJokeToFriend espera a verifiedFetch terminar toda sua execução (até o ultimo .then() ou . catch() ) para só depois executar o console.log() .