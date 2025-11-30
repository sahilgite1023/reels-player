const express = require("express");
const cors = require("cors");
const path = require("path");

// Routes
const reelsRoutes = require("./routes/reelsRoutes");

const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(express.json());

// Serve uploaded videos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use reels routes
app.use("/api/reels", reelsRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Reels API is running 🚀");
});

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

let port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
