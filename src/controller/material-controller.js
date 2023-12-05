const materialService = require("../services/material-service")
const classService = require("../services/class-service");

const createDataMaterialController = async (req, res) => {
    try {
    const result = await materialService.createDataMaterialService(req.body)
        return res.status(200).json({
            code: 201,
            status: "success",
            material: result
        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message
        })
    }
}
getAllDataMaterialsController = async (req, res) => {
    try {
        const result = await materialService.getAllDataMaterialsService()
        return res.status(200).json({
            code: 200,
            status: "success",
            material: result
        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            code: 400,
            status:"failed",
            message: error.message,
            material:[]
        })
    }
}
getDataByIdMaterialsController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await materialService.getDataByIdMaterialsService(id)
        return res.status(200).json({
            code: 200,
            status: "success",
            message: `data materials with id ${id} found`,
            material:result,

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            material:[]
        });
    }
}
const updateDataMaterialsController = async (req, res) => {
    try {
        const id = req.params.id
        const request = req.body
        request.id = id
        const result = await materialService.updateDataMaterialsService(request)
        return res.status(200).json({
            code: 200,
            status: "success",
            message: `material with id ${id} updated.`,
            material: result,

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            material:[]
        });
    }
}
const deleteDataMaterialController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await materialService.deleteDataMaterialService(id)
        return res.status(200).json({
            code: 200,
            status: "success",
            message:`data material with id ${id} deleted`,
            material: result

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            material:[]
        });
    }
}
const deleteAllDataMaterialController = async (req, res) => {
    try {
        const result = await materialService.DeleteAllDataMaterialService()
        return res.status(200).json({
            code: 200,
            status:"success delete all Data material",
            material: result
        })
    }catch (error){
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            material:[]
        })
    }
}
module.exports = {createDataMaterialController,getAllDataMaterialsController,getDataByIdMaterialsController,updateDataMaterialsController,deleteDataMaterialController,deleteAllDataMaterialController}