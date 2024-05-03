const express = require("express");
const app = express();
const cors = require("cors");

const QRCode = require("qrcode");

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require("./routes/users");

// Use routes
app.use("/users", userRoutes);

// app.get("/generateQR", async (req, res) => {
//   try {
//     const url =
//       "https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30";
//     const qrCodeImage = await QRCode.toDataURL(url);
//     res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
//   } catch (err) {
//     console.error("Error generating QR code:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
