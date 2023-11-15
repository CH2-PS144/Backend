const classService = require("../services/class-service")
const logging =require("../application/logging")
const createDataClassController =  async (req, res) => {
    try {
        const result = await classService.createDataClassService(req.body)
        return res.status(201).json({
            code: 201,
            status: "success",
            message: "new class data added!",
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
const getAllDataClassController = async (req, res) => {

    try {
        const result = await classService.getAllDataClassService();

        return res.status(200).json({
            code: 201,
            status: "success",
            message: "success getting all Class data",
            data: result
        });

    }catch (error) {
        console.log(error)
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
        // console.log(result)
    return res.status(200).json({
        code: 200,
        status: "success",
        message: `data with id ${id} found`,
        data:result,

    })

    }catch (error) {
        console.log(error)
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            data:[]
        });
    }
}
const updateDataClassController = async (req, res) => {
   try {
       const id = req.params.id
       const request = req.body
       request.id = id
       const result = await classService.updateDataClassService(request)

       console.log(result)

       return res.status(200).json({
           code: 200,
           status: "success",
           message: `class with id ${id} updated.`,
           data: result,

       })
   }catch (error) {
    console.log(error)
       return res.status(error.statusCode || 400).json({
           status: 'failed',
           message: error.message,
           data:[]
       });
   }
}

const deleteDataClassController = async (req, res) => {
    try {
        const {id} = req.params
        const result = await classService.deleteDataClassService(id)
        console.log(result)
        return res.status(200).json({
            code: 200,
            status: "success",
            message:`data class with id ${id} deleted`

        })
    }catch (error) {
        return res.status(error.statusCode || 400).json({
            status: 'failed',
            message: error.message,
            data:[]
        });
    }
}
module.exports = {createDataClassController,getDataClassByIdController,getAllDataClassController,updateDataClassController,deleteDataClassController}