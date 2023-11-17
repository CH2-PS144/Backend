const validate = require("../validation/validation")
const {getDataByIdMaterialsValidation} = require("../validation/material-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");
const logger = require("../application/logging")
const {request} = require("express");
const {getClassValidationById} = require("../validation/class-validation");


const createDataMaterialService = async (body) => {
    const {name, classId} = body

    if (!(name && classId)) {
        throw new ResponseError(400, 'field is required', true);
    }

    const  checkExistingName = await prisma.material.count({
        where: {
            name: body.name
        }
    })
    if (checkExistingName === 1) {
    throw new ResponseError(400, "Name already used", true)
    }
    const createMaterials = await prisma.material.create({
        data: {
            name: body.name,
            class: {
                connect: {
                    id:body.classId
                },
            },
        },
        select: {
            id: true,
            name: true,
            class: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    if (!createMaterials) {
        throw new ResponseError(400, '');
    }
    return createMaterials;

}
const getAllDataMaterialsService = async  () => {
   const getMaterials = await prisma.material.findMany({
       select: {
           id: true,
           name: true,
           class: {
               select: {
                   id: true,
                   name: true
               },
           },
       },
   })
    return getMaterials;
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
    const {name} = body

    if (!(name)) {
        throw new ResponseError(400, 'field is required', true);
    }

    const checkInDataBase = await prisma.material.count({
        where: {
            id: body.id
        }
    })
    if (checkInDataBase !== 1) {
        throw new ResponseError(404, `class with id ${body.id} not found`, true)
    }
    // if (checkInDataBase === 1) {
    //     throw new ResponseError(404, "materials already used", true)
    // }
    const createData = await prisma.material.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name
        },
        select: {
            id: true,
            name: true,
            class: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
    console.log(createData)
    return createData
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
            name: true
        }
    })
}
module.exports = {createDataMaterialService,getAllDataMaterialsService,getDataByIdMaterialsService,updateDataMaterialsService,deleteDataMaterialService}