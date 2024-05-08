const fs = require("fs");
const QRCode = require("qrcode");

const express = require("express");
const router = express.Router();

const { firebaseAdmin, storage } = require("../fire");
const db = firebaseAdmin.firestore();

const verifyToken = require("../middleware/authMiddleware");
const baseURL = require("../baseURL");

router.get("/checkInvitationCode/:eventCode", verifyToken, async (req, res) => {
  try {
    const { eventCode } = req.params;

    const result = await db.collection("eventCodes").doc(eventCode).get();

    if (!result.exists) {
      return res
        .status(200)
        .json({ message: "Event Code not found", status: "404" });
    }

    const event = await db
      .collection("events")
      .doc(result.data().eventId)
      .get();

    return res.status(200).json({
      message: "success",
      data: {
        eventId: event.id,
        eventName: event.data().eventName,
        owner: event.data().owner,
        location: event.data().location,
        date: event.data().date,
        eventCode: eventCode,
      },
      status: "200",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const { eventId, eventName, date, eventCode, rsvpStatus, totalGuest } =
      req.body;

    const eventRef = db.collection("events").doc(eventId);
    // Update Confirmed or Declined
    if (rsvpStatus === "confirmed") {
      await eventRef.update({
        totalConfirmed: firebaseAdmin.firestore.FieldValue.increment(1),
        totalPending: firebaseAdmin.firestore.FieldValue.increment(-1),
      });
    } else if (rsvpStatus === "declined") {
      await eventRef.update({
        totalDeclined: firebaseAdmin.firestore.FieldValue.increment(1),
        totalPending: firebaseAdmin.firestore.FieldValue.increment(-1),
      });
    }

    let image_url = "";

    if (rsvpStatus == "confirmed") {
      // if rsvp is confirmed , then Generate QR Code

      // Create URL
      const url = `${baseURL}/checkIn/checkRSVP/${eventCode}`;

      const fileName = `${req.email}-${eventCode}.png`;

      // Generate QR Code to File
      await QRCode.toFile(fileName, url);

      // Upload QR Code to Firebase Storage
      const file = storage.file(fileName);
      await storage.upload(fileName, {
        destination: fileName,
      });

      console.log(`qrcode.png uploaded to ${file.baseUrl}.`);

      // options for the getSignedUrl() function
      const options = {
        action: "read",
        expires: Date.now() + 31 * 24 * 60 * 60 * 1000, // 31 day
      };

      // The right hand side returns an array of signedUrl
      const signedUrl = await storage.file(fileName).getSignedUrl(options);

      image_url = signedUrl[0]; // save the signed Url to image_url

      // Delete file
      fs.unlink(fileName, (err) => {
        if (err) {
          console.error("Error Delete: ", err);
          return;
        }
        console.log("File Deleted");
      });

      // Update Rsvp Pax
      await eventRef.update({
        totalRsvpPax: firebaseAdmin.firestore.FieldValue.increment(
          parseInt(totalGuest)
        ),
      });
    }

    // Update Guest in Event
    await db
      .collection("events")
      .doc(eventId)
      .collection("listGuest")
      .doc(req.email)
      .update({
        rsvpStatus: rsvpStatus,
        qrCodeUrl: image_url,
        totalGuest: totalGuest,
      });

    // Update Event Code
    await db
      .collection("eventCodes")
      .doc(eventCode)
      .update({ rsvpStatus: rsvpStatus });

    // Update QrCode in User
    await db.collection("users").doc(req.email).collection("qrCode").add({
      eventName: eventName,
      date: date,
      eventCode: eventCode,
      qrCodeUrl: image_url,
    });

    return res.status(200).json({
      message: "success",
      image_url: image_url,
      status: "200",
    });
  } catch (err) {
    console.error("Error Upload: ", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
