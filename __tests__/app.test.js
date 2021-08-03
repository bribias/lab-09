import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import Hero from '../lib/models/Hero';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('creates a character via POST', async () => {
    const character = { name: 'Katsuki Bakgugo', alias: 'Kacchan', quirk: 'explosion' };
    const res = await  request(app)
      .post('/api/v1/heros')
      .send(character);

    expect(res.body).toEqual({ id: '1', ...character });
  });
});
