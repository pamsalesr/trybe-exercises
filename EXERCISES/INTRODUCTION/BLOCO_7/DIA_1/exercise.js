/* part I */
const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);


/* part II */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os numeros ${oddsAndEvens.sort((a, b) => a-b)} se encontram ordenados de forma crescente!`)

/* part III */

const factorial = number => {
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result = result * i
  }
  return result
}

console.log(factorial(5));

/* part III -recursiva */

const factorial = number => number > 1 ? (number * factorial(number - 1)) : 1;

console.log(factorial(5));

/* part IV */

function longestWord(sentence) {
  let words = sentence.split(' ')
  let currentLongestWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > currentLongestWord.length) {
      currentLongestWord = words[i]
    }
  }
  return currentLongestWord
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* part IV - recursiva */

const longestWord = sentence => sentence.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* part VI */

const newString = string => string.replace('x', 'Pamela');
const skills = ['HTML', 'JavaScript', 'CSS', 'Bash', 'DOM'];
const skillsSorted = skills => skills.split(' ').sort((wordA, wordB) => wordB.length - wordA.length);
console.log(skillsSorted(skills))
console.log(newString('Tryber x aqui!'));



