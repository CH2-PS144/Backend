const materialService = require("../services/material-service")
const classService = require("../services/class-service");

const createDataMaterialController = async (req, res) => {
    try {
    const result = await materialService.createDataMaterialService(req.body)
        return res.status(200).json({
            code: 201,
            status: "success",
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
getAllDataMaterialsController = async (req, res) => {
    try {
        const result = await materialService.getAllDataMaterialsService()
        return res.status(200).json({
            code: 200,
            status: "success",
            data: result
        })
    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            code: 400,
            status:"failed",
            message: error.message,
            data:[]
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
            data:result,

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            data:[]
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
            data: result,

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            data:[]
        });
    }
}
const deleteDataMaterialController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await materialService.deleteDataMaterialService(id)
        console.log(result)
        return res.status(200).json({
            code: 200,
            status: "success",
            message:`data material with id ${id} deleted`,
            data: result

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            data:[]
        });
    }
}
module.exports = {createDataMaterialController,getAllDataMaterialsController,getDataByIdMaterialsController,updateDataMaterialsController,deleteDataMaterialController}