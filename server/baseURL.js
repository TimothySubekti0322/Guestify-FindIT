require("dotenv").config();

const development = process.env.DEVELOPMENT;
const production = "https://guestify.fly.dev";

const baseURL = production;

module.exports = baseURL;
