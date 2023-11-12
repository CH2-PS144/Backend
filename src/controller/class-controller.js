const classService = require("../services/class-service")
const logging =require("../application/logging")
const createDataClassController =  async (req, res) => {
    try {
        const result = await classService.createDataClass(req.body)
        return res.status(201).json({
            code: 201,
            status: "success",
            message: "new class data added!",
            data: result
        })

    }catch (error) {
       console.log(error)
        return res.status(400).json({
            code:400,
            status: 'failed',
            message: error.message,
            data: []
        });
    }
}

module.exports = {createDataClassController}