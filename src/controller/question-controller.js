const questionService = require("../services/question-service")
const materialService = require("../services/material-service");
const answerService = require("../services/answer-service");

const createQuestionController = async (req, res) => {
    try {
        const result = await questionService.createQuestionService(req.body)

        return res.status(200).json({
            code: 201,
            status: "success",
            data: result
        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            question:[]
        })
    }
}

const getAllDtaQuestionController = async (req, res) => {
    try {
        const result = await questionService.getAllDataQuestionService()
        return res.status(200).json({
            code: 200,
            status:"success",
            message: result
        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            question:[]
        })
    }
}
const getDataQuestionByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await questionService.getDataByIdQuestionService(id)
        console.log(result)
        return res.status(200).json({
            code: 200,
            status:"success",
            message: result
        })
    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            question:[]
        })
    }
}

const updateDataQuestionController = async (req,res) => {
    try {
        const id = req.params.id
        const request = req.body
        request.id = id
        const result = await questionService.updateDataQuestionService(request)
        console.log(result)
        return res.status(200).json({
            code: 200,
            status:`question with id ${id} updated.`,
            message: result
        })
    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            question:[]
        })
    }
}
const deleteDataQuestionController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await questionService.deleteDataQuestionService(id)
        console.log(result)
        return res.status(200).json({
            code: 200,
            status:"success",
            message: result
        })
    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            question:[]
        })
    }
}
const deleteAllDataAnswerController = async (req, res) => {
    try {
        const result = await questionService.deleteAllDataQuestionService()
        console.log("Hasil query delete ==>", result)
        return res.status(200).json({
            code: 200,
            status:"success delete all Data question",
            message: result
        })
    }catch (error){
        console.log(error)
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            question:[]
        })
    }
}
module.exports = {createQuestionController,getAllDtaQuestionController,getDataQuestionByIdController,updateDataQuestionController,deleteDataQuestionController,deleteAllDataAnswerController}