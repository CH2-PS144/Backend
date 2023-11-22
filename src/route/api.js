const express = require("express")
const classController = require("../controller/class-controller")
const materialController = require("../controller/material-controller")
const questionController = require("../controller/question-controller")
const answerController = require("../controller/answer-controller")

const router = new express.Router();
//Class API
router.post("/api/class", classController.createDataClassController)
router.get("/api/class/:id",classController.getDataClassByIdController)
router.get("/api/class",classController.getAllDataClassController)
router.patch("/api/class/:id", classController.updateDataClassController)
router.delete("/api/class/:id", classController.deleteDataClassController)
router.delete("/api/class", classController.deleteAllDataClassController)

//Material API
router.post("/api/materials", materialController.createDataMaterialController)
router.get("/api/materials", materialController.getAllDataMaterialsController)
router.get("/api/materials/:id", materialController.getDataByIdMaterialsController)
router.patch("/api/materials/:id", materialController.updateDataMaterialsController)
router.delete("/api/materials/:id", materialController.deleteDataMaterialController)
router.delete("/api/materials", materialController.deleteAllDataMaterialController)

//Question API
router.post("/api/questions", questionController.createQuestionController)
router.get("/api/questions", questionController.getAllDtaQuestionController)
router.get("/api/questions/:id", questionController.getDataQuestionByIdController)
router.patch("/api/questions/:id", questionController.updateDataQuestionController)
router.delete("/api/questions/:id", questionController.deleteDataQuestionController)
router.delete("/api/questions", questionController.deleteAllDataAnswerController)

//Answer API
router.post("/api/answers", answerController.createDataAnswerController)
router.get("/api/answers", answerController.getAllDataAnswerController)
router.get("/api/answers/:id", answerController.getDaswerByIdController)
router.patch("/api/answers/:id", answerController.updateDataAnswerController)
router.delete("/api/answers/:id", answerController.deleteDataAnswerController)
router.delete("/api/answers", answerController.deleteAllDataAnswerController)

module.exports = router;