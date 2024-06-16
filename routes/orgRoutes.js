// routes/organisationRoutes.js
const express = require('express');
const {
  createOrganisation,
  getOrganisationById,
  updateOrganisationById,
  deleteOrganisationById
} = require('../controllers/organisationController');
const router = express.Router();

// Create a new organisation
router.post('/', createOrganisation);

// Get organisation by ID
router.get('/:id', getOrganisationById);

// Update organisation by ID
router.put('/:id', updateOrganisationById);

// Delete organisation by ID
router.delete('/:id', deleteOrganisationById);

module.exports = router;
