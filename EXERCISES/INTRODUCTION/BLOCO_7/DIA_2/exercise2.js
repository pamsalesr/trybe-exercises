const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/
const scheduleLesson2 = lesson2.turno = 'manhã';
console.table(lesson2);

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
const keys = object => Object.keys(object);
console.log(keys(lesson3));

/* Crie uma função para mostrar o tamanho de um objeto.*/
const objectSize = object => Object.keys(object).length;
console.log(objectSize(lesson2));

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const values = object => Object.values(object);
console.log(values(lesson1));

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 */
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */
const getTotalStudents = (object) => {
  let total = 0;
  const arrayObjectKeys = Object.keys(object);
  for (index in arrayObjectKeys) {
    total += object[arrayObjectKeys[index]].numeroEstudantes;
  }
  return total;
}
console.log(getTotalStudents(allLessons));

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */
