const answerService = require("../services/answer-service")
const materialService = require("../services/material-service");


const createDataAnswerController = async (req, res) => {
    try {
        const result = await answerService.createDataAnswerService(req.body)
        console.log(result)
        return res.status(201).json({
            code: 201,
            status: "success",
            message: "new question data added!",
            data: result
        })

    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
        });
    }
}
const getAllDataAnswerController = async (req, res) => {
    try {
        const result = await answerService.getALlDataAnswerService()
        return res.status(200).json({
            code: 200,
            status: "success",
            data: result
        })
    }catch (error) {
    console.log(error)
    return res.status(error.statusCode || 400).json({
        status: 'failed',
        message: error.message,
    });
    }
}
const getDataAnswerByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await answerService.getDataAnswersByIdService(id)
        return res.status(200).json({
            code: 200,
            status: "success",
            message: `data materials with id ${id} found`,
            data:result,

        })

    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
        });
    }
}
const updateDataAnswerController = async (req, res) => {
    try {
        const id = req.params.id
        const request = req.body
        request.id = id

        const result = await answerService.updateDataAnswerService(request)
        return res.status(200).json({
            code: 200,
            status: "success",
            message: `material with id ${id} updated.`,
            data: result,
        })
    }catch (error) {
        console.log(error)
    }
}
const deleteDataAnswerController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await answerService.deleteDataAnswerService(id)
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
        const result = await answerService.DeleteAllDataAnswerService()
        console.log("Hasil query delete ==>", result)
        return res.status(200).json({
            code: 200,
            status:"success delete all Data answers",
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
const deleteAllDataClassController = async (req, res) => {
    try {
        const result = await materialService.DeleteAllDataMaterialService()
        console.log("Hasil query delete ==>", result)
        return res.status(200).json({
            code: 200,
            status:"success delete all Data class",
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
module.exports = {createDataAnswerController,getAllDataAnswerController,getDataAnswerByIdController,updateDataAnswerController,deleteDataAnswerController,deleteAllDataAnswerController,deleteAllDataClassController}