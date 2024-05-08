const express = require("express");
const router = express.Router();

const { firebaseAdmin } = require("../fire");
const verifyToken = require("../middleware/authMiddleware");
const db = firebaseAdmin.firestore();

router.get("/", verifyToken, async (req, res) => {
  try {
    const qrCodeSnapshot = await db
      .collection("users")
      .doc(req.email)
      .collection("qrCode")
      .get();

    if (qrCodeSnapshot.empty) {
      return res
        .status(200)
        .json({ message: "No QR Codes found", qrCodes: [], status: "200" });
    }
    let qrCodes = [];
    qrCodeSnapshot.forEach((doc) => {
      qrCodes.push({ id: doc.id, ...doc.data() });
    });

    res
      .status(200)
      .json({ message: "success", qrCodes: qrCodes, status: "200" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

module.exports = router;
