const connectDB = require('./config/db');
const app = require('./app');

// 1. Connects to database
connectDB();

// 2. config options
const PORT = process.env.PORT || 3000;

// 3. Starts the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
