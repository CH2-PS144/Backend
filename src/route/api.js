const express = require("express")
const classController = require("../controller/class-controller")

const router = new express.Router();
//Class API
router.post("/api/class", classController.createDataClassController)

module.exports = router;