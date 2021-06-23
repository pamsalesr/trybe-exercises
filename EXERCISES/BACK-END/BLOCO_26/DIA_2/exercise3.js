// Reescreva o código do exercício anterior para que utilize async/await .

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

async function callFunction() {
  try {
    const result = await doMath(param1, param2, param3)
    console.log(result)
  } catch (err) {
    console.error(err)
  }
}

callFunction();