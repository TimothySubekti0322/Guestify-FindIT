require("dotenv").config();

const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin");

const { firebaseAdmin } = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");
const nodemailer = require("nodemailer");
const incrementToken = require("../functions/generateEventToken");
const ejs = require("ejs");
const formatMonthDateYear = require("../functions/dateFormater");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

router.post("/add", verifyToken, upload.single("file"), async (req, res) => {
  try {
    if (
      req.file.mimetype !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return res
        .status(200)
        .json({ message: "File format not supported", status: "400" });
    }

    // Read Excel File
    const file = await readXlsxFile(req.file.path);

    if (!file) {
      return res.status(200).json({ message: "File is Empty", status: "200" });
    }

    // Check if the file isn't using template
    if (
      file[0].length !== 3 ||
      file[2][0] == null ||
      file[2][1] == null ||
      file[2][2] == null
    ) {
      return res
        .status(200)
        .json({ message: "File template is wrong", status: "400" });
    }

    // Check the latest event Code
    const eventTokenSnapshot = await db
      .collection("eventCodes")
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    let eventToken = eventTokenSnapshot.docs[0].id;

    // Get Event ID from Request
    const { eventId } = req.body;

    // Get The Event Name and Owner
    const eventSnapshot = await db.collection("events").doc(eventId).get();
    const eventName = eventSnapshot.data().eventName;
    const eventDate = formatMonthDateYear(new Date(eventSnapshot.data().date));

    const owner = eventSnapshot.data().owner;
    const guest = eventSnapshot.data().guest;

    const fileRows = file.length - 2;
    const length = parseInt(guest) > fileRows ? fileRows : parseInt(guest);

    for (let i = 2; i < length + 2; i++) {
      if (file[i][1] !== null && file[i][2] !== null) {
        // Create Guest Entity
        const guestEntity = {
          name: file[i][1],
          rsvpStatus: "waiting",
          qrCodeUrl: "",
          checkedIn: false,
          angpao: false,
          souvenir: false,
          totalGuest: 0,
        };

        // Save Guest Entity to Firestore
        await db
          .collection("events")
          .doc(eventId)
          .collection("listGuest")
          .doc(file[i][2])
          .set(guestEntity);

        // Generate Event Token
        eventToken = incrementToken(eventToken);

        const eventCode = {
          email: file[i][2],
          eventId: eventId,
          rsvpStatus: "waiting",
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        };

        // Save Event Code to Firestore
        await db.collection("eventCodes").doc(eventToken).set(eventCode);

        const html = await ejs.renderFile("views/emailTemplate.ejs", {
          eventName: eventName,
          owner: owner,
          eventToken: eventToken,
          eventDate: eventDate,
        });

        const mailOptions = {
          from: process.env.EMAIL,
          to: file[i][2],
          subject: "Guestify",
          html: html,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
    }

    // Update Total Pending
    await db.collection("events").doc(eventId).update({
      totalPending: length,
    });

    // Delete file
    fs.unlink(req.file.path, (err) => {
      if (err) {
        return;
      }
    });

    return res.status(200).json({
      message: "success",
      status: "200",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
  }
});

module.exports = router;
