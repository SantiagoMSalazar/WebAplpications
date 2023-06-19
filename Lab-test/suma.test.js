// math.test.js
const sum = require('./suma');

test('Suma dos números correctamente', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Suma dos números negativos correctamente', () => {
  expect(sum(-2, -3)).toBe(-5);
});

test('Suma un número positivo y un número negativo correctamente', () => {
  expect(sum(2, -3)).toBe(-1);
});
