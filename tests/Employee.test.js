const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const ussVoyagerEmployee = new Employee('Tuvok', 'tuvok@voyager.org', '12345');

  expect(ussVoyagerEmployee.name).toBe('Tuvok');
  expect(ussVoyagerEmployee.email).toBe('tuvok@voyager.org');
  expect(ussVoyagerEmployee.id).toBe('12345');
});

test("gets the Employee's role", () => {
const ussVoyagerEmployee = new Employee('Tuvok', 'tuvok@voyager.org', '12345');

expect(ussVoyagerEmployee.getRole()).toBe(`Employee`);
});