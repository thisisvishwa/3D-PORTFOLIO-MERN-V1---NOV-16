# API Documentation

## Overview

This document provides information about the API endpoints used in the 3D Portfolio Nov 16 V1 application.

## Endpoints

### GET /api/projects

Fetches all the projects from the database.

**Response**

A JSON array of project objects.

### GET /api/projects/:id

Fetches a specific project by its ID.

**Parameters**

- `id`: The ID of the project.

**Response**

A JSON object representing the project.

### POST /api/projects

Adds a new project to the database.

**Request Body**

A JSON object representing the project.

**Response**

A JSON object representing the created project.

### PUT /api/projects/:id

Updates a specific project by its ID.

**Parameters**

- `id`: The ID of the project.

**Request Body**

A JSON object representing the updated project details.

**Response**

A JSON object representing the updated project.

### DELETE /api/projects/:id

Deletes a specific project by its ID.

**Parameters**

- `id`: The ID of the project.

**Response**

A JSON object confirming the deletion of the project.

### GET /api/blogs

Fetches all the blogs from the database.

**Response**

A JSON array of blog objects.

### GET /api/blogs/:id

Fetches a specific blog by its ID.

**Parameters**

- `id`: The ID of the blog.

**Response**

A JSON object representing the blog.

### POST /api/blogs

Adds a new blog to the database.

**Request Body**

A JSON object representing the blog.

**Response**

A JSON object representing the created blog.

### PUT /api/blogs/:id

Updates a specific blog by its ID.

**Parameters**

- `id`: The ID of the blog.

**Request Body**

A JSON object representing the updated blog details.

**Response**

A JSON object representing the updated blog.

### DELETE /api/blogs/:id

Deletes a specific blog by its ID.

**Parameters**

- `id`: The ID of the blog.

**Response**

A JSON object confirming the deletion of the blog.

### POST /api/contact

Sends a contact message.

**Request Body**

A JSON object representing the contact message.

**Response**

A JSON object confirming the receipt of the message.

## Error Handling

In case of an error, the API will return a JSON object with an `error` property containing the error message.