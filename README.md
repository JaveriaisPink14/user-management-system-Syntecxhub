# user-management-system-Syntecxhub

A Node.js API for user management with Express, MongoDB, and basic authentication.

## Features

- Create, read, update, delete users
- Password hashing with bcrypt
- Basic authentication for protected routes
- MongoDB integration

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with your MongoDB URI and port
4. Run `npm start` or `npx nodemon server.js`

## API Endpoints

- POST /create - Create a new user
- GET / - Get all users (requires auth)
- PUT /:id - Update a user (requires auth)
- DELETE /:id - Delete a user (requires auth)
