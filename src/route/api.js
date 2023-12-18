const express = require("express")
const router = new express.Router();

const {reqLogger} = require('../middleware');
const {reqValidation} = require('../middleware');

const prisma = require("../application/database")
const classController = require("../controller/class-controller")
const materialController = require("../controller/material-controller")
const quizController = require("../controller/quiz-controller")
const checkQuizController = require("../controller/checkQuiz-controller")



//middleware
router.use(reqLogger);
router.use(reqValidation);


//Class requestValidation
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

//quiz API
router.post("/api/quiz", quizController.createController)
router.get("/api/quiz", quizController.getAllController)
router.get("/api/quiz/:id", quizController.getById)
router.patch("/api/quiz/:id", quizController.updateDataController)
router.delete("/api/quiz/:id", quizController.deleteDataController)
router.delete("/api/quiz", quizController.deleteAllDataController)

//check Quiz API
router.get("/api/questions", checkQuizController.getDataQuizController)
router.get("/api/questions/:id", checkQuizController.getDataByIdQuizController)
router.post("/api/questions/submit-answer", checkQuizController.submitAnswerController)


router.get('/api/status', async (req, res) => {
    try {
        await prisma.$connect();

        return res.status(200).json({
            status: 'OK',
            message: 'server is up and ready to go! 🚀',
        });
    } catch (error) {
        return res.status(500).json({
            status: 'NOT OK',
            message: 'something went wrong with the server',
            error,
        });
    } finally {
        await prisma.$disconnect();
    }
});


module.exports = router;