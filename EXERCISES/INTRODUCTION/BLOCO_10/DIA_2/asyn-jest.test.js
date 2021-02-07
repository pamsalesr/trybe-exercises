// CALLBACKS: Ao realizar testes assíncronos, é necessário ter cuidado com falso-positivos, pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona.
// Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
/*
test("Não deveria passar!", () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
  }, 500);
});  // O teste da falso-positivo!

test("Não deveria passar!", (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});
*/

const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', (done) => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
});


// PROMISES
/*
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2); // é necessário inserir um return antes da função e, em seguida, adicionar a quantidade de expect esperadas.
    return getListAnimals('Dog').then(listDogs => { // Como a funcao a ser testada retorna uma Promise , é necessário adicionar o .then para pegar o resultado.
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>  // Como o array Animals não possui nenhum Lion (tipo inserido no teste), será disparada a reject , que retornará um objeto com uma chave error com o valor Não possui esse tipo de animal.
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});
*/

// ASYNC / AWAIT
/*
test('Testando com async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

test('Testando com async/await, testando o reject', async () => {
  try {  // quando ocorre o reject da promise. É necessário adicionar o bloco try/catch .
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});
*/

// BEFORE EACH / AFTER EACH

/*
-> O beforeEach é executado antes de cada teste. Dessa forma, você escreve o trecho de código uma única vez e garante que o "ambiente" esteja preparado para os testes que precisarem. SETUP
-> O afterEach é especialmente útil para resetar configurações, dados, entre outras coisas. TEARDOWN
*/

/*
// Este beforeEach e este afterEach serão aplicados a todos os testes
beforeEach(() => {
  retrieveCitiesFromCache();
});

afterEach(() => {
  resetCities();
});

it("should have only 1 city after remove Belo Horizonte", () => {
  removeCity("Belo Horizonte");
  expect(getCities().length).toBe(1);
});

it("should have the city of Belo Horizonte", () => {
  expect(isCity("Belo Horizonte")).toBeTruthy();
});

describe('Requesting cities from api', () => {
  // Este beforeEach e este afterEach serão aplicados apenas aos testes
  // do bloco do describe
  beforeEach(() => {
    return requestCities();
  });
  
  afterEach(() => {
    resetCities();
  });

  it("should have 8 cities after request", () => {
    let cities = getCities();
    expect(cities.length).toBe(8);
  });

  it("should have the city of Belo Horizonte", () => {
    expect(isCity("Belo Horizonte")).toBeTruthy();
  });

  it("should have the city of Fortaleza", () => {
    expect(isCity("Fortaleza")).toBeTruthy();
  });
});
*/