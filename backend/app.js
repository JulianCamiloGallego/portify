const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./models").sequelize;

// Import routes
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", resumeRoutes);

// Sync Database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
