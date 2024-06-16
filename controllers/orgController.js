// controllers/organisationController.js
const Organisation = require('../models/organisationModel');

// Create a new organisation
const createOrganisation = async (req, res) => {
  try {
    const organisation = new Organisation(req.body);
    await organisation.save();
    res.status(201).json(organisation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrganisationById = async (req, res) => {
    try {
      const organisation = await Organisation.findById(req.params.id);
      if (!organisation) {
        return res.status(404).json({ error: 'Organisation not found' });
      }
      res.json(organisation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  const updateOrganisationById = async (req, res) => {
    try {
      const organisation = await Organisation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!organisation) {
        return res.status(404).json({ error: 'Organisation not found' });
      }
      res.json(organisation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  const deleteOrganisationById = async (req, res) => {
    try {
      const organisation = await Organisation.findByIdAndDelete(req.params.id);
      if (!organisation) {
        return res.status(404).json({ error: 'Organisation not found' });
      }
      res.json({ message: 'Organisation deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

// exports all
module.exports = {
  createOrganisation,
  getOrganisationById,
  updateOrganisationById,
  deleteOrganisationById
};