const express = require('express');
const { 
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
 } = require('../controllers/userController');

// router config
const router = express.Router();


// routes
router.get('/', getUsers);

// Create a new user
router.post('/', createUser);

// Get user by ID
router.get('/:id', getUserById);

// Update user by ID
router.put('/:id', updateUserById);

// Delete user by ID
router.delete('/:id', deleteUserById);

// exports all
module.exports = router;