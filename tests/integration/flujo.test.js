const request = require('supertest');
const app = require('../../src/app');

describe('Flujo completo', () => {
  it('debe responder en /', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('Hola Mundo');
  });
});