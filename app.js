const express = require('express');
const userRoutes = require('./routes/userRoutes');
const organisationRoutes = require('./routes/organisationRoutes');

// 1. sets up express app
const app = express();

// 2. Middleware
app.use(express.json());

// 3. sets up Routes
app.use('/api/users', userRoutes);
app.use('/api/organisations', organisationRoutes);

// exports
module.exports = app;
