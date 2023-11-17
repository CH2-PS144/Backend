const express = require("express")
const classController = require("../controller/class-controller")
const materialController = require("../controller/material-controller")

const router = new express.Router();
//Class API
router.post("/api/class", classController.createDataClassController)
router.get("/api/class/:id",classController.getDataClassByIdController)
router.get("/api/class",classController.getAllDataClassController)
router.patch("/api/class/:id", classController.updateDataClassController)
router.delete("/api/class/:id", classController.deleteDataClassController)
module.exports = router;

//Material API
router.post("/api/materials", materialController.createDataMaterialController)
router.get("/api/materials", materialController.getAllDataMaterialsController)
router.get("/api/materials/:id", materialController.getDataByIdMaterialsController)
router.patch("/api/materials/:id", materialController.updateDataMaterialsController)
router.delete("/api/materials/:id", materialController.deleteDataMaterialController)