const express = require("express");
const slickDeals = require("./fetchdeals.js");
const cors = require("cors");
require('es6-promise').polyfill();
require('isomorphic-fetch');
const morgan = require("morgan");

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("combined"));

app.get("/", async (req, res) => {
  res.status(200).send(await slickDeals());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
