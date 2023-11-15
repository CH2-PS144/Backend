const express = require("express")
const classController = require("../controller/class-controller")

const router = new express.Router();
//Class API
router.post("/api/class", classController.createDataClassController)
router.get("/api/class/:id",classController.getDataClassByIdController)
router.get("/api/class",classController.getAllDataClassController)
router.patch("/api/class/:id", classController.updateDataClassController)
router.delete("/api/class/:id", classController.deleteDataClassController)
module.exports = router;