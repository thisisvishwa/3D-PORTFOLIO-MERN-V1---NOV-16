# Installation Guide

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have a Windows/Linux/Mac machine.

## Installing 3D Portfolio Nov 16 V1

To install 3D Portfolio Nov 16 V1, follow these steps:

1. Clone the repository:
```
git clone https://github.com/username/3D-Portfolio-Nov-16-V1.git
```

2. Navigate to the project directory:
```
cd 3D-Portfolio-Nov-16-V1
```

3. Install the dependencies:
```
npm install
```

## Setting Up the Database

1. Install MongoDB on your machine and start the MongoDB service.

2. Create a `.env` file in the root directory of the project and add the following line:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Running the Application

1. To start the server, run the following command:
```
npm run server
```

2. To start the client, open a new terminal and run the following command:
```
npm start
```

The application should now be running on `http://localhost:3000`.

## Running the Tests

To run the tests, use the following command:
```
npm test
```

## Building the Application

To build the application for production, use the following command:
```
npm run build
```

This will create a `build` directory in the root of the project with the compiled code.

## Deploying the Application

Follow the deployment instructions in the `README.md` file.

## Troubleshooting

If you encounter any issues during the installation process, please refer to the `docs/developer_guide.md` and `docs/user_guide.md` files. If the issue persists, please open an issue on the GitHub repository.