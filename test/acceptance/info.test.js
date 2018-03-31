import request from 'supertest';

import app from '../../src/app';

describe('Test the root path', () => {
  it('it should response the GET method', async () => {
    const response = await request(app).get('/info');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('version');
  });
});
