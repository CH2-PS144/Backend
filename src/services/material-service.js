const validate = require("../validation/validation")
const {getDataByIdMaterialsValidation,deleteAllDataMaterialValidation} = require("../validation/material-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");
const {deleteAllDataAnswerValidation} = require("../validation/answer-validation");


const createDataMaterialService = async (body) => {
    const {name,content,classId} = body
  
    if (!(name && classId && content)) {
        throw new ResponseError(400, 'field is required', true);
    }

    const  checkExistingName = await prisma.material.count({
        where: {
            name: body.name
        }
    })
    if (checkExistingName === 1) {
    throw new ResponseError(400, "material already used", true)
    }
    const createMaterials = await prisma.material.create({
        data: {
            name: body.name,
            content: body.content,
            class: {
                connect: {
                    id:body.classId
                },
            },
        },
        select: {
            class: {
                select: {
                    id: true,
                    name: true,
                },
            },
            id: true,
            name: true,
            content: true,

        },
    });
    console.log(body.content)
    if (!createMaterials) {
        throw new ResponseError(400, '');
    }
    return createMaterials;
}
const getAllDataMaterialsService = async  () => {
   return prisma.material.findMany({
       select: {
           id: true,
           name: true,
           content: true,
           class: {
               select: {
                   id: true,
                   name: true
               },
           },
       },
   })
}
const getDataByIdMaterialsService = async (materialsId) => {
    materialsId = validate(getDataByIdMaterialsValidation,materialsId)
    const getData = await prisma.material.findUnique({
        where: {
            id: materialsId
        },
        select: {
            id:true,
            name: true,
            content: true,
            class: {
                select: {
                    id:true,
                    name: true
                }
            }
        }
    })
    if(!getData){
        throw new ResponseError(400, `material with id ${materialsId} not found`, true)
    }
    return getData
}
const updateDataMaterialsService = async (body) => {
    const {name, content} = body

    if (!(name && content)) {
        throw new ResponseError(400, 'field is required', true);
    }

    const checkInDataBase = await prisma.material.count({
        where: {
            id: body.id
        }
    })
    if (checkInDataBase !== 1) {
        throw new ResponseError(404, `material with id ${body.id} not found`, true)
    }

   return prisma.material.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name,
            content : body.content
        },
        select: {
            id: true,
            name: true,
            content: true,
            class: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}
const deleteDataMaterialService = async (materialId) => {
    materialId = validate(getDataByIdMaterialsValidation, materialId)
    const checkInDataBase = await prisma.material.count({
        where: {
            id: materialId
        }
    })
    if (checkInDataBase !== 1) {
        throw  new ResponseError(404, `material with id ${materialId} not found`, true)
    }
    return prisma.material.delete({
        where: {
            id: materialId
        },
        select: {
            id: true,
            name: true,
            content: true
        }
    })
}
const DeleteAllDataMaterialService = async (request) => {
    const Delete = validate(deleteAllDataAnswerValidation, request)
    return prisma.material.deleteMany({
        data: Delete
    })
}

module.exports = {createDataMaterialService,getAllDataMaterialsService,getDataByIdMaterialsService,updateDataMaterialsService,deleteDataMaterialService,DeleteAllDataMaterialService}