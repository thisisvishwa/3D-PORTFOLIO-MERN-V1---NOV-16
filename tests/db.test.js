```javascript
const mongoose = require('mongoose');
const connectDB = require('../server/config/db');
const Project = require('../server/models/Project');
const Blog = require('../server/models/Blog');
const Contact = require('../server/models/Contact');

describe('Database Tests', () => {
    beforeAll(async () => {
        await connectDB();
    });

    test('Test Connection', async () => {
        const dbStatus = mongoose.connection.readyState;
        expect(dbStatus).toBe(1);
    });

    test('Create & save project successfully', async () => {
        const projectData = { title: 'Test Project', description: 'This is a test project' };
        const validProject = new Project(projectData);
        const savedProject = await validProject.save();

        expect(savedProject._id).toBeDefined();
        expect(savedProject.title).toBe(projectData.title);
        expect(savedProject.description).toBe(projectData.description);
    });

    test('Create & save blog post successfully', async () => {
        const blogData = { title: 'Test Blog', content: 'This is a test blog post' };
        const validBlog = new Blog(blogData);
        const savedBlog = await validBlog.save();

        expect(savedBlog._id).toBeDefined();
        expect(savedBlog.title).toBe(blogData.title);
        expect(savedBlog.content).toBe(blogData.content);
    });

    test('Create & save contact successfully', async () => {
        const contactData = { name: 'Test User', email: 'testuser@gmail.com', message: 'This is a test message' };
        const validContact = new Contact(contactData);
        const savedContact = await validContact.save();

        expect(savedContact._id).toBeDefined();
        expect(savedContact.name).toBe(contactData.name);
        expect(savedContact.email).toBe(contactData.email);
        expect(savedContact.message).toBe(contactData.message);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });
});
```