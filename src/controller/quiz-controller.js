const quizService = require("../services/quiz-service");
const materialService = require("../services/material-service");

const createController = async (req, res) => {
   try {
       const result = await quizService.createService(req.body)
       return res.status(201).json({
           code: 201,
           status: "success",
           quiz: result
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message,
           quiz:[]
       })
   }
}
const getAllController = async (req, res) => {
   try {
       const result = await quizService.getAllService()
       return res.status(200).json({
           code: 200,
           status: "success",
           quiz: result
       })
   }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            quiz:[]
        })
   }
}
const getById = async (req, res) => {
   try {
       const {id} = req.params
       const result = await quizService.getById(id)
       return res.status(200).json({
           code: 200,
           status: "success",
           message: `data quiz with id ${id} found`,
           quiz: result,
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message,
           quiz:[]
       })
   }
}
const updateDataController = async (req, res) => {
   try {
       const id = req.params.id
       const request = req.body
       request.id = id
       const result = await quizService.updateDataService(request)
       return res.status(200).json({
           code: 200,
           status: "success",
           message: `data quiz with id ${id} found`,
           quiz: result,
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message,
           quiz:[]
       })
   }
}
const deleteDataController = async (req,res) => {
   try {
       const {id} = req.params
       const result = await quizService.deleteDataService(id)

       return res.status(200).json({
           code: 200,
           status:"success",
           quiz: result
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status:"failed",
           message: error.message,
           quiz:[]
       })
   }
}
const deleteAllDataController = async (req, res) => {
    try {
        const result = await quizService.deleteAllDataService()
        return res.status(200).json({
            code: 200,
            status: "success delete all Data quiz",
            quiz: result,
        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status:"failed",
            message: error.message,
            quiz:[]
        })
    }
}
module.exports = {createController,getAllController,getById,updateDataController,deleteDataController,deleteAllDataController}