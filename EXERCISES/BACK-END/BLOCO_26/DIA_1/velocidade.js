const readline = require('readline-sync');

const dist = readline.questionFloat('Qual foi a distância percorrida? (em km) ');
const time = readline.questionFloat('Quanto tempo durou? (em horas) ')

function calculaValocidade() {

  console.log(`Distância: ${dist}, tempo: ${time}`);

  const velocidade = (dist / time).toFixed(2);

  console.log(`Velocidade: ${velocidade} km/h`);

}

calculaValocidade();
