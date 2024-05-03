const express = require("express");
const router = express.Router();

const firebaseAdmin = require("../fire");
const db = firebaseAdmin.firestore();

// GET /users
router.get("/", async (req, res) => {
  res.json({ message: "Welcome to User Route" });
});

// GET /users/id
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const snapshot = await db.collection("users").get();
    let users = [];
    snapshot.forEach((doc) => {
      let id = doc.id;
      let data = doc.data();
      users.push({ id, ...data });
    });
    res.json({ users: users });
  } catch (error) {
    console.log("Error getting user:", error);
  }
});

module.exports = router;
