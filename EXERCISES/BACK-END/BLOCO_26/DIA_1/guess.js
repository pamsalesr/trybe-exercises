const readline = require('readline-sync');

runGame();

function runGame() {
  const number = Math.ceil(Math.random() * 10);

  const userGuess = readline.questionFloat('Qual foi o numero sorteado? ');

  if (userGuess !== number) {
    console.log(`Não foi dessa vez :/ o número era ${number}`)
  } else {
    console.log('Parabéns, você acertou!')
  }

  const playAgain = readline.question('Você quer jogar novamente? Digite s ou qualquer outra coisa para nao. ');
  
  if (playAgain === 's') {
    runGame();
  }
}
