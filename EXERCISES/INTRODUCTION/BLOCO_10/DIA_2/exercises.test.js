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

/*
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});
*/

// Código-base para os exercícios 2 e 3:
/*
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
*/
// EXERCICIO 2:
// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
/*
describe('Qaundo o id existe', () => {
  test('Retorne o nome do usuario', () => {
    expect.assertions(1);
    return getUserName(5).then((data) => expect(data).toEqual('Paul'));
  });
});

describe('Qaundo o id nao existe', () => {
  test('Retorna um erro', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => expect(error).toEqual({ error: 'User with 3 not found.' }));
  });
});
*/

// EXERCICIO 3: Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
/*
describe('Qaundo o id existe - async/await', () => {
  test('Retorne o nome do usuario', async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toEqual('Mark');
  });
});

describe('Qaundo o id nao existe - async/await', () => {
  test('Retorne um erro', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  });
});
*/
