const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const ussVoyagerIntern = new Intern('Harry Kim', 'hkim@voyager.org', '12345', 'Starfleet Academy');

  expect(ussVoyagerIntern.name).toBe('Harry Kim');
  expect(ussVoyagerIntern.email).toBe('hkim@voyager.org');
  expect(ussVoyagerIntern.id).toBe('12345');
  expect(ussVoyagerIntern.school).toBe('Starfleet Academy');
});

test("gets intern's school value", () => {
    const ussVoyagerIntern = new Intern('Harry Kim', 'hkim@voyager.org', '12345', 'Starfleet Academy');
  
    expect(ussVoyagerIntern.getSchool()).toBe(ussVoyagerIntern.school);
  });

  test("gets the intern's role", () => {
    const ussVoyagerIntern = new Intern('Harry Kim', 'hkim@voyager.org', '12345', 'Starfleet Academy');
  
    expect(ussVoyagerIntern.getRole()).toBe(`Intern`);
  });