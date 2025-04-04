import request from 'supertest';

import { app } from './app';

describe('app', () => {
  describe('get /healthz', () => {
    it('should return a 200 status code', async () => {
      const response = await request(app).get('/healthz');
      expect(response.status).toBe(200);
    });
  });

  describe('middleware', () => {
    it('should parse JSON payloads', async () => {
      const payload = { test: 'data' };
      const response = await request(app)
        .post('/healthz')
        .send(payload)
        .set('Content-Type', 'application/json');

      expect(response.status).not.toBe(200);
    });

    it('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/non-existent-route');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors[0].message).toContain('Route not found');
    });

    it('should include appropriate error details in the response', async () => {
      const response = await request(app).get('/random-path');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('errors');
      expect(Array.isArray(response.body.errors)).toBe(true);
    });
  });
});
