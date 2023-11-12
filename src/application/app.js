const { errorMiddleware } = require("../middleware/error-middleware");
const cors = require('cors');
const express = require("express");
const router = require("../route/api")

const app = new express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(router);
app.use(errorMiddleware);


module.exports = { app };
