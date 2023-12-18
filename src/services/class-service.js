const validate = require("../validation/validation")
const {createClassValidation,getClassValidationById,getAllDataClassValidation,deleteAllDataClassValidation} = require("../validation/class-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");

const createDataClassService = async (request) => {
    //validate
    const Class = validate(createClassValidation, request)
    const checkExitingName = await prisma.class.count({
        where: {
            name: Class.name
        }
    });

    if (checkExitingName === 1) {
            throw new ResponseError(400, "class already exists", true);
    }

    //create data class
    return prisma.class.create({
        data: Class,
        select : {
            id: true,
            name: true
        }
    })
}
const getAllDataClassService = async (request) => {
    const getClass = validate(getAllDataClassValidation,request)
    return prisma.class.findMany({
        data: getClass,
        select : {
            id: true,
            name: true
        }
    });
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
const updateDataClassService = async (body) => {
    //validate
    const {name} = body

    const checkInDataBase = await prisma.class.count({
        where: {
            id:body.id
        }
    })
    if (checkInDataBase !== 1 ) {
        throw  new ResponseError(404, `class with id ${body.id} not found`, true)
    }

    if (!(name)) {
        throw new ResponseError(400, 'name must be provided', true);
    }
  return prisma.class.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name
        },
        select: {
            id: true,
            name: true
        }
    })

}

const deleteDataClassService = async (classId) => {
    classId = validate(getClassValidationById, classId)
    const checkInDataBase = await prisma.class.count({
        where: {
            id: classId
        }
    })
    if (checkInDataBase !== 1) {
        throw  new ResponseError(404, `class with id ${classId} not found`, true)
    }
    return prisma.class.delete({
        where: {
            id: classId
        },
        select: {
            id: true,
            name: true
        }
    })
}
const deleteAllDataClassService = async (request) => {
    const Delete = validate(deleteAllDataClassValidation, request)
    return prisma.class.deleteMany({
        data: Delete
    })
}
module.exports = { createDataClassService, getDataClassServiceById,getAllDataClassService,updateDataClassService,deleteDataClassService,deleteAllDataClassService}
