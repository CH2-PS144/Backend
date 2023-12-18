const { errorMiddleware } = require("../middleware/error-middleware");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("../route/api");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

module.exports = { app };
