const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/UserModel");
const bodyParser = require("body-parser");
const auth = require("../middleware/auth");

router.use(bodyParser.json({ limit: "100mb" }));

router.post("/profile/update", auth, async (req, res) => {
  try {
    // Get user ID from the authenticated request (added by auth middleware)
    const userId = req.user.user_id || req.user._id;

    const dbUser = await User.findById(userId);
    if (!dbUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const {
      name,
      email,
      phoneNumber,
      profilePicture,
      codeforcesHandle,
      codeforcesRating,
      programmingLanguages,
      skills,
    } = req.body;

    // Update fields
    dbUser.name = name || dbUser.name;
    dbUser.email = email || dbUser.email;
    dbUser.phoneNumber = phoneNumber || dbUser.phoneNumber;
    dbUser.profilePicture = profilePicture || dbUser.profilePicture;
    dbUser.codeforcesHandle = codeforcesHandle || dbUser.codeforcesHandle;
    dbUser.codeforcesRating = codeforcesRating || dbUser.codeforcesRating;
    dbUser.programmingLanguages =
      programmingLanguages || dbUser.programmingLanguages;
    dbUser.skills = skills || dbUser.skills;

    await dbUser.save();
    res
      .status(200)
      .json({ message: "Profile updated successfully", user: dbUser });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

router.post("/profile/update-password", auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.user_id || req.user._id;

    const dbUser = await User.findById(userId);
    if (!dbUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(
      currentPassword,
      dbUser.HashedPassword
    );
    if (!isMatch) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    dbUser.HashedPassword = hashedPassword;
    await dbUser.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Password update error:", err);
    res.status(500).json({ error: "Failed to update password" });
  }
});

router.get("/profile", auth, async (req, res) => {
  const user = req.user;
  // console.log(user);
  const dbUser = await User.findById(user.user_id);
  if (dbUser) {
    res.status(200).json({
      name: dbUser.name,
      email: dbUser.email,
      phoneNumber: dbUser.phoneNumber,
      profilePicture: dbUser.profilePicture,
      codeforcesHandle: dbUser.codeforcesHandle,
      codeforcesRating: dbUser.codeforcesRating,
      programmingLanguages: dbUser.programmingLanguages,
      skills: dbUser.skills,
    });
  } else {
    res.status(404).send("User not found");
  }
});

router.get("/:id", async (req, res) => { 
  // console.log("qwertyuiop");
  const { id } = req.params;
  const dbUser = await User.findById(id);
  if (dbUser) {
    res.status(200).json({
      name: dbUser.name,
      email: dbUser.email,
      phoneNumber: dbUser.phoneNumber,
      profilePicture: dbUser.profilePicture,
      codeforcesHandle: dbUser.codeforcesHandle,
      codeforcesRating: dbUser.codeforcesRating,
      programmingLanguages: dbUser.programmingLanguages,
      skills: dbUser.skills,
    });
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = router;
