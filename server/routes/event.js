const express = require("express");
const router = express.Router();

const { firebaseAdmin } = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

// Create New Event
router.post("/create", verifyToken, async (req, res) => {
  try {
    const {
      type,
      owner,
      eventName,
      guest,
      location,
      date,
      cost,
      paymentMethod,
    } = req.body;

    const newEvent = {
      type: type,
      owner: owner,
      eventName: eventName,
      guest: guest,
      location: location,
      date: date,
      cost: cost,
      paymentMethod: paymentMethod,
      invitationSent: false,
      totalRsvpPax: 0,
      totalCheckedInPax: 0,
      totalConfirmed: 0,
      totalPending: 0,
      totalDeclined: 0,
      totalCheckedIn: 0,
      totalAngpao: 0,
      totalSouvenir: 0,
    };

    const addEvent = await db.collection("events").add(newEvent);

    const user = await db.collection("users").doc(req.email).get();
    const userEvent = user.data().event;

    // push new event id to user event array
    userEvent.push(addEvent._path.segments[1]);
    await db.collection("users").doc(req.email).update({ event: userEvent });

    res.status(201).json({ message: "success", status: "201" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

module.exports = router;
