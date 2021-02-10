const exercise1 = require('./exercise1');

test('Testando randomNumberUntilAHundred, a funcao deveria:', () =>{
  exercise1.randomNumberUntilAHundred = jest.fn().mockReturnValue(10);

  expect(exercise1.randomNumberUntilAHundred()).toBe(10);
  expect(exercise1.randomNumberUntilAHundred).toHaveBeenCalled();
  expect(exercise1.randomNumberUntilAHundred).toHaveBeenCalledTimes(1);
});