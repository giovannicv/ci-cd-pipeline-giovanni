const { suma } = require('../../src/app');
test('suma 1 + 2 = 3', () => {
  expect(suma(1, 2)).toBe(3);
});