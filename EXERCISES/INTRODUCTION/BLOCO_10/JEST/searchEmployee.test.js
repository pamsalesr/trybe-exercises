const searchEmployee = require('./serachEmployee');

describe('Test searchEmployee', () => {
  it('Test if searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Test if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Test if the function throws an error message when ID is not found', () => {
    expect(() => { searchEmployee('4777-2', 'specialities') }).toThrowError(new Error ('ID não identificada'));
  });
  it('Test if searchEmployee throws an error message when details do not exist', () => {
    expect(() => { searchEmployee('4678-2', 'nickname') }).toThrowError(new Error('Informação indisponível'));
  });
  it('Test if function throws an error when info and ID do not exist', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Test if searchEmployee(id, "firstName") returns first name of the employee', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('Test if searchEmployee(id, "lastName") returns employee`s last name', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });
  it('Test if searchEmployee(id, "specialities") returns employee`s specialities list', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
})
