// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

const fetchPromisse = () => {
  const promise = new Promise((resolve, reject) => {
    const randomSquareNumbersArray = [ ];
    for (let index = 0; index < 10; index += 1) {
      randomSquareNumbersArray.push(Math.pow((Math.floor(Math.random()* 50)), 2));
    }
    if (randomSquareNumbersArray.reduce((total, currentValue) => total + currentValue, 0) < 8000) {
      resolve();
    }
    reject();
  });

  promise
    .then((randomSquareNumbersArray) => [2, 3, 5, 10].map((number) => randomSquareNumbersArray/number))
    .then(array => array.reduce((number, currentNumber) => number + currentNumber), 0)
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromisse();
