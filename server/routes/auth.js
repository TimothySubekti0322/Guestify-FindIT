const express = require("express");
const router = express.Router();

const { firebaseAdmin } = require("../fire");
const db = firebaseAdmin.firestore();

const bcrypt = require("bcrypt");
require("dotenv").config();
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "d9e8a3432a71314d3c76913847da5287005a9e281d52642f630c28b4cbe093c2";
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const usersDbRef = db.collection("users");

    // Check if user already exists
    const userSnapshot = await usersDbRef.doc(email).get();
    if (userSnapshot.exists) {
      return res
        .status(200)
        .json({ message: "User already exists", status: "400" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = {
      email: email,
      name: name,
      password: hashedPassword,
      event: [],
    };

    // Add user to database
    await usersDbRef.doc(email).set(newUser);

    // // Create QR code collection inside user doc
    // await usersDbRef.doc(email).collection("qrCodes").add({});

    res.status(201).json({ message: "success", status: "201" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userSnapshot = await db.collection("users").doc(email).get();

    if (!userSnapshot.exists) {
      return res.status(200).json({ message: "User not found", status: "404" });
    }

    const userData = userSnapshot.data();

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.status(200).json({ message: "Wrong Password", status: "400" });
    }

    // Generate token
    const token = jwt.sign({ email: email }, JWT_SECRET, { expiresIn: "31d" });

    res.status(200).json({
      message: "status",
      token: token,
      payload: userData,
      status: "200",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

module.exports = router;
