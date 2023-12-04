const quizService = require("../services/quiz-service");
const materialService = require("../services/material-service");

const createController = async (req, res) => {
   try {
       const result = await quizService.createService(req.body)
       return res.status(200).json({
           data: result
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message
       })
   }
}
const getAllController = async (req, res) => {
   try {
       const result = await quizService.getAllService()
       return res.status(200).json({
           data: result
       })
   }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message
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
           message: `data materials with id ${id} found`,
           data: result,
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message
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
           data: result
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status: "failed",
           message: error.message
       })
   }
}

const deleteDataController = async (req,res) => {
   try {
       const {id} = req.params
       const result = await quizService.deleteDataService(id)
       console.log(result)
       return res.status(200).json({
           code: 200,
           status:"success",
           message: result
       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           code: 400,
           status:"failed",
           message: error.message
       })
   }
}

const deleteAllDataController = async (req, res) => {
    try {
        const result = await quizService.deleteAllDataService()
        console.log("Hasil query delete ==>", result)
        return res.status(200).json({
            code: 200,
            status: "success delete all Data quiz",
            message: result,
        })
    }catch (error) {
        console.log(error)
    }
}
module.exports = {createController,getAllController,getById,updateDataController,deleteDataController,deleteAllDataController}