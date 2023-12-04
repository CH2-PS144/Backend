const checkQuizService = require("../services/checkQuiz-service")

const getDataQuizController = async (req, res) => {
  try {
      const result = await checkQuizService.getDataQuizService()
      return res.status(200).json({
      data: result
      })
  }catch (error) {
      console.log("response", error)
      return res.status(error.statusCode || 400).json({
       code: 400,
       status: "failed",
       message: error.message
      })
  }
}
const submitAnswerController = async (req, res) => {
    try {
        const result = await checkQuizService.submitAnswer(req.body)
        return res.status(200).json({
        data: result
        })
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        code: 400,
        status: "failed",
        message: error.message
      })
    }
};
module.exports = {getDataQuizController,submitAnswerController}