```javascript
const Project = require('../models/Project');
const Blog = require('../models/Blog');
const Contact = require('../models/Contact');

const dataController = {};

dataController.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        next(err);
    }
};

dataController.getBlogPosts = async (req, res, next) => {
    try {
        const blogPosts = await Blog.find();
        res.json(blogPosts);
    } catch (err) {
        next(err);
    }
};

dataController.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        next(err);
    }
};

dataController.addProject = async (req, res, next) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject);
    } catch (err) {
        next(err);
    }
};

dataController.addBlogPost = async (req, res, next) => {
    try {
        const newBlogPost = new Blog(req.body);
        await newBlogPost.save();
        res.json(newBlogPost);
    } catch (err) {
        next(err);
    }
};

dataController.addContact = async (req, res, next) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json(newContact);
    } catch (err) {
        next(err);
    }
};

module.exports = dataController;
```