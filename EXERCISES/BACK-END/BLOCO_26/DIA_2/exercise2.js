// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

function doMath(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    const param = [num1, num2, num3];
    param.forEach((p) => {
      if (typeof p != 'number') {
        return reject(new Error('Informe apenas números'))
      }
    });

    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'))
    }

    resolve(result);
  });
}

const param1 = Math.floor(Math.random() * 100 + 1);
const param2 = Math.floor(Math.random() * 100 + 1);
const param3 = Math.floor(Math.random() * 100 + 1);

doMath(param1, param2, param3)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message))
