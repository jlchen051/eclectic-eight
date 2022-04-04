const express = require('express')

// Import users-controller
const usersRoutes = require('./../controllers/users-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/users/all'
router.get('/all', usersRoutes.usersAll)

// Add route for POST request to create new book
// In server.js, books route is specified as '/books'
// this means that '/create' translates to '/users/create'
router.post('/create', usersRoutes.usersCreate)

// Export router
module.exports = router