const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require("./routes/auth");
const qrCodeRoutes = require("./routes/qrCode");
const eventRoutes = require("./routes/event");
const rsvpRoutes = require("./routes/rsvp");
const checkInRoutes = require("./routes/checkIn");
const guestRoutes = require("./routes/guest");
const dashboardRoutes = require("./routes/dashboard");

// Use routes
app.use("/auth", authRoutes);
app.use("/qrCode", qrCodeRoutes);
app.use("/event", eventRoutes);
app.use("/rsvp", rsvpRoutes);
app.use("/checkIn", checkInRoutes);
app.use("/guest", guestRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Event Management API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
