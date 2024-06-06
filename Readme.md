# Ticket Management System

This project is a simple ticket management system built using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete tickets through a RESTful API.

## Admin Panel
To access the admin panel, navigate to /admin in your browser. This route can be used for administrative purposes, such as managing users, roles, or other administrative tasks.

## API Endpoints

### Create a new ticket

* URL: /api/tickets
* Method: POST
* Request Body: JSON object with ticket details
* Response: Created ticket object

### Get all tickets
* URL: /api/tickets
* Method: GET
* Response: Array of ticket objects
* Get a single ticket by ID
* URL: /api/tickets/:id
* Method: GET
* Response: Ticket object with the specified ID

### Update a ticket by ID
* URL: /api/tickets/:id
* Method: PATCH
* Request Body: JSON object with updated ticket details
* Response: Updated ticket object

## Dependencies
* Express: Web application framework for Node.js
* Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment
* cors: Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express applications