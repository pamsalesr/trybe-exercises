// EXERCICIO 1: 
// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
/*
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};


test('Test if uppercase function returns ANA MARIA', (done) => {
  uppercase('Ana Maria', (result) => {
    expect(result).toBe('ANA MARIA');
    done();
  });
})
*/

// Código-base para os exercícios 2 e 3:

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// EXERCICIO 2:
// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.