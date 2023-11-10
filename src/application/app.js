const { errorMiddleware } = require("../middleware/error-middleware");

const express = require("express");

const app = new express();
app.use(express.json());
app.use(errorMiddleware);

module.exports = { app };
