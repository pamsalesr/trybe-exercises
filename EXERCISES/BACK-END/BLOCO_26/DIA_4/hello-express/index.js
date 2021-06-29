const express = require('express');

const app = express(); // 1 Criar uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); // 2 Dizer ao Express que, quando uma requisição com método GET
// for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;

// rota === GET /hello - Uma rota ou endpoint é definida pelo método HTTP e caminho
app.listen(3000, () => { // binding
  console.log('Aplicação ouvindo na porta 3000');
}); // 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3000;

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4 Ao tratar uma requisição com método GET no caminho /hello ,
}                                       //  enviar o status HTTP 200 que significa OK e a mensagem "Hello, world!".