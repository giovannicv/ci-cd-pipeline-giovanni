const request = require('supertest');
const app = require('../../src/app');

test('GET /suma/2/3 devuelve 5', async () => {
  const response = await request(app).get('/suma/2/3');
  expect(response.body.resultado).toBe(5);
});