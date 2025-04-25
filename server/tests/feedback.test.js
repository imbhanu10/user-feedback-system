const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('../routes/feedback');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/feedback', feedbackRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI + '_test', { useNewUrlParser: true, useUnifiedTopology: true });
  await mongoose.connection.db.dropDatabase();
});
afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('Feedback API', () => {
  it('should create and retrieve feedback', async () => {
    const data = { userName: 'Test User', email: 'test@example.com', feedback: 'This is a test', category: 'Bug' };
    const post = await request(app).post('/feedback').send(data);
    expect(post.status).toBe(201);
    expect(post.body.userName).toBe(data.userName);

    const get = await request(app).get('/feedback');
    expect(get.status).toBe(200);
    expect(get.body.length).toBe(1);
  });

  it('should return validation error for invalid email', async () => {
    const bad = { userName: 'U', email: 'bad', feedback: 'x', category: 'Unknown' };
    const res = await request(app).post('/feedback').send(bad);
    expect(res.status).toBe(400);
  });

  it('should delete feedback by id', async () => {
    const data = { userName: 'Del User', email: 'del@example.com', feedback: 'Delete me', category: 'Suggestion' };
    const post = await request(app).post('/feedback').send(data);
    const id = post.body._id;
    const del = await request(app).delete(`/feedback/${id}`);
    expect(del.status).toBe(200);
    expect(del.body.message).toBe('Deleted');
  });
});
