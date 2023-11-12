const validate = require("../validation/validation")
const {createClassValidation} = require("../validation/class-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");
const logger = require("../application/logging")
const createDataClass = async (request) => {
    //validate
    const Class = validate(createClassValidation, request)
   console.log(Class)
    //create data class
    const classData = await prisma.class.create({
        data: Class,
        select : {
            id: true,
            name: true
        }
    })
    //check value empty class
    if (!classData) {
        throw new ResponseError(400,"Data Class not be empty", "true")
    }
    return classData
}

module.exports = { createDataClass}
