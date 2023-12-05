const classService = require("../services/class-service")
const logging =require("../application/logging")
const createDataClassController =  async (req, res) => {
    try {
        const result = await classService.createDataClassService(req.body)
        return res.status(201).json({
            code: 201,
            status: "success",
            message: "new class data added!",
            class: result
        })

    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
        });
    }
}
const getAllDataClassController = async (req, res) => {

    try {
        const result = await classService.getAllDataClassService();
        return res.status(200).json({
            code: 201,
            status: "success",
            message: "success getting all Class data",
            class: result
        });

    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
        });
    }
}
const getDataClassByIdController = async (req, res) => {
    try {
        const {id} = req.params
    const result = await classService.getDataClassServiceById(id)
    return res.status(200).json({
        code: 200,
        status: "success",
        message: `data material with id ${id} found`,
        class:result,

    })

    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            class:[]
        });
    }
}
const updateDataClassController = async (req, res) => {
   try {
       const id = req.params.id
       const request = req.body
       request.id = id
       const result = await classService.updateDataClassService(request)

       return res.status(200).json({
           code: 200,
           status: "success",
           message: `class with id ${id} updated.`,
           class: result,

       })
   }catch (error) {
       return res.status(error.statusCode || 400).json({
           status: 'failed',
           message: error.message,
           class:[]
       });
   }
}

const deleteDataClassController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await classService.deleteDataClassService(id)
        return res.status(200).json({
            code: 200,
            status: "success",
            message:`data class with id ${id} deleted`,
            class: result

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            class:[]
        });
    }
}
const deleteAllDataClassController = async (req, res) => {
    try {
        const result = await classService.deleteAllDataClassService()
        return res.status(200).json({
            code: 200,
            status:"success delete all Data class",
            class: result
        })
    }catch (error){
        return res.status(error.statusCode || 400).json({
            code: 400,
            status: "failed",
            message: error.message,
            class:[]
        })
    }
}
module.exports = {createDataClassController,getDataClassByIdController,getAllDataClassController,updateDataClassController,deleteDataClassController,deleteAllDataClassController}