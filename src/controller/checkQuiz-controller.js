const checkQuizService = require("../services/checkQuiz-service")

const getDataQuizController = async (req, res) => {
  try {
      const result = await checkQuizService.getDataQuizService()
      return res.status(200).json({
          code: 200,
          status: "success",
          quiz: result
      })
  }catch (error) {
      return res.status(error.statusCode || 400).json({
       code: 400,
       status: "failed",
       message: error.message
      })
  }
}
const getDataByIdQuizController = async (req, res) => {
    const { id } = req.params;
   try {
       const result = await checkQuizService.getDataByIdQuiz(id)
       return res.status(200).json({
           code: 200,
           status: "success",
           quiz: result
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message
       })
   }
}
const getQuizByMaterialIdController = async (req, res) => {
    try {
        const { materialId } = req.params;
        const result = await checkQuizService.getDataQuizByMaterialId(materialId);

        return res.status(200).json({
            code: 200,
            status: 'success',
            message: `Quizzes for material with id ${materialId} found`,
            quizzes: result,
        });
    } catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: 'failed',
            message: error.message,
            quizzes: [],
        });
    }
};
const submitAnswerController = async (req, res) => {
    try {
        const result = await checkQuizService.submitAnswer(req.body)
        return res.status(200).json({
        quiz: result
        })
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        code: 400,
        status: "failed",
        message: error.message
      })
    }
};
module.exports = {getDataQuizController,submitAnswerController,getDataByIdQuizController,getQuizByMaterialIdController}