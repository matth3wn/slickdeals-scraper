const express = require("express");
const slickDeals = require("./fetchdeals.js");
const cors = require("cors");
require('es6-promise').polyfill();
require('isomorphic-fetch');
const morgan = require("morgan");
const twilio = require("twilio");
var accountSid = "AC0d112d72fd13c16f48fb8c5cd216920c"; // Your Account SID from www.twilio.com/console
var authToken = "aa11964eaed21797f7281ad1a9d41e27";
var client = new twilio(accountSid, authToken);
// import someObject from ("../../response.json");

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("combined"));

app.get("/", async (req, res) => {
  res.status(200).send(await slickDeals());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
