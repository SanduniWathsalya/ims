require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));



// User Schema
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", UserSchema);

// API Route to Handle Form Submission
app.post("/submit-form", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const newUser = new User({ firstName, lastName });
    await newUser.save();
    res.status(201).json({ message: "User saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving user" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
