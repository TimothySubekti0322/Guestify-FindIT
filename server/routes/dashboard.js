const express = require("express");
const router = express.Router();

const { firebaseAdmin } = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.get("/", verifyToken, async (req, res) => {
  try {
    const email = req.email;

    // find user
    const user = await db.collection("users").doc(email).get();

    const event = user.data().event;

    let eventData = [];

    for (const eventId of event) {
      const event = await db.collection("events").doc(eventId).get();

      const listGuest = await db
        .collection("events")
        .doc(eventId)
        .collection("listGuest")
        .get();

      let guestData = [];
      if (!listGuest.empty) {
        let number = 1;
        listGuest.forEach((doc) => {
          guestData.push({
            no: number,
            email: doc.id,
            ...doc.data(),
          });
          number++;
          console.log("guestData : ", {
            email: doc.id,
            ...doc.data(),
          });
        });
      }

      eventData.push({
        id: eventId,
        ...event.data(),
        listGuest: guestData,
      });
    }

    return res.status(200).json({
      message: "success",
      data: eventData,
      status: "200",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.get("/:eventId", verifyToken, async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await db.collection("events").doc(eventId).get();

    const listGuest = await db
      .collection("events")
      .doc(eventId)
      .collection("listGuest")
      .get();

    let guestData = [];
    if (!listGuest.empty) {
      let number = 1;
      listGuest.forEach((doc) => {
        guestData.push({
          no: number,
          email: doc.id,
          ...doc.data(),
        });
        number++;
        console.log("guestData : ", {
          email: doc.id,
          ...doc.data(),
        });
      });
    }

    return res.status(200).json({
      message: "success",
      data: {
        id: eventId,
        ...event.data(),
        listGuest: guestData,
      },
      status: "200",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

module.exports = router;
