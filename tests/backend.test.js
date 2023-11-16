```javascript
const request = require('supertest');
const app = require('../server/index.js');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the data API', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/data');
        expect(response.statusCode).toBe(200);
    });

    test('It should response the POST method', async () => {
        const response = await request(app).post('/api/data').send({
            project: 'Test Project',
            blog: 'Test Blog',
            contact: 'Test Contact'
        });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test error handling', () => {
    test('It should response the GET method with error', async () => {
        const response = await request(app).get('/error');
        expect(response.statusCode).toBe(500);
    });
});
```