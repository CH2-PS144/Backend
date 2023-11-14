const validate = require("../validation/validation")
const {createClassValidation,getClassValidationById,getAllDataClassValidation} = require("../validation/class-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");
const logger = require("../application/logging")
const createDataClassService = async (request) => {
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
    if (!classData || classData === "") {
        throw new ResponseError(400,"Data Class not be empty", true)
    }
    return classData
}

const getAllDataClassService = async (request) => {
    const getClass = validate(getAllDataClassValidation,request)
    const Class = await prisma.class.findMany({
        data: getClass,
        select : {
            id: true,
            name: true
        }
    });
    console.log(Class)
    return Class
}
const getDataClassServiceById = async (classId) => {
    //validate
    classId = validate(getClassValidationById, classId)
    //get data class
    const Class = await prisma.class.findUnique({
        where: {
            id: classId
        },
        select: {
            id: true,
            name: true
        }
    })
    //check value empty class
    if(!Class){
        throw new ResponseError(400, `class with id ${classId} not found`, true)
    }
    return Class
}
module.exports = { createDataClassService, getDataClassServiceById,getAllDataClassService}
