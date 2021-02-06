const techList = (arrayTech, name) => {
  if(arrayTech.length === 0) return 'Vazio!'
  const sortArray = arrayTech.sort();
  const finalArray = [];
  [...sortArray].forEach((tech) => {
    finalArray.push({
      tech: tech,
      name,
    })
  })
  return finalArray;
}

module.exports = techList;
