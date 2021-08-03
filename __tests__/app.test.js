import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('creates a character via POST', async () => {
    const character = { name: 'Katsuki Bakgugo', quirk: 'explosion' };
    const res = await (await request(app).post('/api/character')).setEncoding(character);

    expect(res.body).toEqual({ id: '1', ...character });
  });
});
