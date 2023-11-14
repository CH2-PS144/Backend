const express = require("express")
const classController = require("../controller/class-controller")

const router = new express.Router();
//Class API
router.post("/api/class", classController.createDataClassController)
router.get("/api/class/:id",classController.getDataClassByIdController)
router.get("/api/class",classController.getAllDataClassController)
module.exports = router;