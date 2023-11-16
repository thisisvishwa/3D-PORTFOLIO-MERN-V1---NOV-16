# Developer Guide

## Project Structure

The project follows the MERN stack structure. The main directories are:

- `src`: Contains the frontend code written in React.js.
- `server`: Contains the backend code written in Node.js and Express.js.
- `docs`: Contains the documentation files.
- `tests`: Contains the test files.

## Frontend

The frontend is built using React.js. The main files are:

- `src/index.js`: The entry point of the application.
- `src/App.js`: The main App component.
- `src/components`: Contains the components for the different sections of the portfolio.
- `src/styles`: Contains the CSS files.
- `src/utils`: Contains utility functions.

## Backend

The backend is built using Node.js and Express.js. The main files are:

- `server/index.js`: The entry point of the server.
- `server/routes/api.js`: Contains the API endpoints.
- `server/controllers/dataController.js`: Contains the controller functions for handling requests.
- `server/middleware/errorHandler.js`: Contains the error handling middleware.
- `server/models`: Contains the Mongoose models.
- `server/config/db.js`: Contains the code for connecting to the MongoDB database.

## Database

The database used is MongoDB. The Mongoose models are defined in the `server/models` directory.

## Error Handling

Error handling is done at both the frontend and backend levels. The `server/middleware/errorHandler.js` file contains the error handling middleware.

## Documentation

The `docs` directory contains the documentation files. These include:

- `docs/installation.md`: Installation guide.
- `docs/user_guide.md`: User guide.
- `docs/developer_guide.md`: Developer guide.
- `docs/api_docs.md`: API documentation.

## Testing

The `tests` directory contains the test files. These include:

- `tests/frontend.test.js`: Tests for the frontend.
- `tests/backend.test.js`: Tests for the backend.
- `tests/db.test.js`: Tests for the database.

## Development Process

The development process involves the following steps:

1. Requirement gathering and analysis.
2. Designing the UI, Responsive Layout, Styling in code.
3. Setting up the development environment.
4. Developing the frontend and backend.
5. Testing the application.
6. Deployment and maintenance.

For more details, refer to the respective documentation files.