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

app.get("/rev", (req, res) => {
  fetch(
    // "https://push.revcontent.com/push/content/?api_key=dd1c5386fe9929c100a7c5cb600dbc66f8070b66&widget_id=118549&device=desktop&country_code=us",
    "https://push.revcontent.com/push/content/?api_key=yourapikey&widget_id=12345&device=desktop&country_code=us",
    { timeout: 1800000 }
  )
    .then(res => res.json())
    .then(data => {
      console.log("Making request...");
      client.messages
        .create({
          body: data.content[0].target_url,
          to: "+13106484371",
          from: "+12034875578",
          mediaUrl: [data.content[0].image]
        })
        .then(message => res.status(200).send(data));
    })
    .catch(err => console.error(err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
