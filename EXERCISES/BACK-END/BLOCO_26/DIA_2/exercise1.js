// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

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
