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

## Example request

Create User

POST http://localhost:5000/api/users/create
Content-Type: application/json

{
  "name": "Javaria shabbir",
  "email": "javaria@example.com",
  "password": "yourpassword"
}


Get All Users

GET http://localhost:5000/api/users
Authorization: Basic <base64-encoded-credentials>


Update User

PUT http://localhost:5000/api/users/694fa6f17b9afba374220072
Content-Type: application/json
Authorization: Basic <base64-encoded-credentials>

{
  "name": "Javaria Updated"
}


Delete User

DELETE http://localhost:5000/api/users/694fa6f17b9afba374220072
Authorization: Basic <base64-encoded-credentials>
