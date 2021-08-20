const Manager = require('../lib/Manager.js');

test('creates an Engineer object', () => {
  const ussVoyagerManager = new Manager('Katherine Janeway', 'kjaneway@voyager.org', '12345', '1');

  expect(ussVoyagerManager.name).toBe('Katherine Janeway');
  expect(ussVoyagerManager.email).toBe('kjaneway@voyager.org');
  expect(ussVoyagerManager.id).toBe('12345');
  expect(ussVoyagerManager.officeNumber).toBe('1');
});

test("gets manager's office number", () => {
    const ussVoyagerManager = new Manager('Katherine Janeway', 'kjaneway@voyager.org', '12345', '1');
  
    expect(ussVoyagerManager.getOfficeNumber()).toBe(ussVoyagerManager.officeNumber);
  });

  test("gets the manager's role", () => {
    const ussVoyagerManager = new Manager('Katherine Janeway', 'kjaneway@voyager.org', '12345', '1');
  
    expect(ussVoyagerManager.getRole()).toBe(`Manager`);
  });