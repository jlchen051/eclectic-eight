const knex = require('./../db')

// Retrieve all users
exports.usersAll = async (req, res) => {
  knex
    .select('*') // select all records
    .from('users') 
    .then(userData => {
      // Send users extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

// Create new user
exports.usersCreate = async (req, res) => {
  // Add new user to database
  knex('users')
    .insert({ // insert new record, a user
      'fname': req.body.fname,
      'lname': req.body.lname,
      'username': req.body.username,
      'email': req.body.email,
      'organization': req.body.organization,
      'password': req.body.password,
      'mentor': req.body.mentor
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `User \'${req.body.username}\' has been created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.username} user: ${err}` })
    })
}
