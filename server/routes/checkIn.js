const express = require("express");
const router = express.Router();

const { firebaseAdmin } = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.get("/checkRSVP/:eventCode", verifyToken, async (req, res) => {
  try {
    const { eventCode } = req.params;

    const result = await db.collection("eventCodes").doc(eventCode).get();

    // Check if event code exists
    if (!result.exists) {
      return res
        .status(200)
        .json({ message: "Event Code not found", status: "404" });
    }

    console.log(result.data());

    const guest = await db
      .collection("events")
      .doc(result.data().eventId)
      .collection("listGuest")
      .doc(result.data().email)
      .get();

    console.log(guest.data());

    // Check if guest is already checked in
    if (guest.data().checkedIn === true) {
      return res.status(200).json({
        message: "Guest already checked in",
        status: "400",
      });
    }

    // Check if RSVP status is confirmed
    if (result.data().rsvpStatus !== "confirmed") {
      return res.status(200).json({
        message: "RSVP status is not confirmed",
        status: "400",
      });
    }

    const event = await db
      .collection("events")
      .doc(result.data().eventId)
      .get();

    console.log(event.data());

    const user = await db.collection("users").doc(result.data().email).get();

    console.log(user.data());

    return res.status(200).json({
      message: "success",
      data: {
        eventId: event.id,
        eventName: event.data().eventName,
        email: user.data().email,
        name: user.data().name,
        tableNumber: alphanumeric(),
      },
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const { eventId, totalGuest, souvenir, angpao, email } = req.body;

    const eventRef = db.collection("events").doc(eventId);

    // check if event ID exists
    const event = await eventRef.get();
    if (!event.exists) {
      return res
        .status(200)
        .json({ message: "Event not found", status: "404" });
    }

    // Update checkedIn Pax
    await eventRef.update({
      totalCheckedInPax: firebaseAdmin.firestore.FieldValue.increment(
        parseInt(totalGuest)
      ),
    });

    console.log("Error disini");

    // Update Guest
    await eventRef.collection("listGuest").doc(email).update({
      totalGuest: totalGuest,
      souvenir: souvenir,
      angpao: angpao,
      checkedIn: true,
    });

    // Update Event Total Checked In, total angpao, total souvenir
    await eventRef.update({
      totalCheckedIn: firebaseAdmin.firestore.FieldValue.increment(1),
      totalAngpao: angpao
        ? firebaseAdmin.firestore.FieldValue.increment(1)
        : firebaseAdmin.firestore.FieldValue.increment(0),
      totalSouvenir: souvenir
        ? firebaseAdmin.firestore.FieldValue.increment(1)
        : firebaseAdmin.firestore.FieldValue.increment(0),
    });

    return res.status(200).json({ message: "success", status: "200" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

const alphanumeric = () => {
  const alphabet = "ABCDEFGHIJK";
  return `${Math.floor(Math.random() * 11) + 1}${
    alphabet[Math.floor(Math.random() * 11)]
  }`;
};

module.exports = router;
