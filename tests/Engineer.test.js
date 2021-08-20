const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
  const ussVoyagerEngineer = new Engineer('B\'Elanna Torres', 'btorres@voyager.org', '12345', 'outofthepark');

  expect(ussVoyagerEngineer.name).toBe('B\'Elanna Torres');
  expect(ussVoyagerEngineer.email).toBe('btorres@voyager.org');
  expect(ussVoyagerEngineer.id).toBe('12345');
  expect(ussVoyagerEngineer.github).toBe('outofthepark');
});

test("gets engineer's github value", () => {
    const ussVoyagerEngineer = new Engineer('B\'Elanna Torres', 'btorres@voyager.org', '12345', 'outofthepark');
  
    expect(ussVoyagerEngineer.getGithub()).toBe(ussVoyagerEngineer.github);
  });

  test("gets the engineer's role", () => {
    const ussVoyagerEngineer = new Engineer('B\'Elanna Torres', 'btorres@voyager.org', '12345', 'outofthepark');
  
    expect(ussVoyagerEngineer.getRole()).toBe(`Engineer`);
  });
