const hydrate = (drinksString) => {
  let regexp = /\d+?/g;
  let extractNumbersFromString = drinksString.match(regexp);
  let sum = 0;

  for (let index = 0; index < extractNumbersFromString.length; index += 1) {
    sum += parseInt(extractNumbersFromString[index], 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = hydrate;
