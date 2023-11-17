const Joi = require("joi");

const createMaterialValidation = Joi.object({
    classId: Joi.string().max(100).required(),
    name: Joi.string().max(70).required(),
})
const getDataByIdMaterialsValidation =  Joi.string().max(100).required();

const updateMaterialsValidation = Joi.object({
    id:Joi.string().max(100).required(),
    name:Joi.string().max(5).required()
})

module.exports = {createMaterialValidation,getDataByIdMaterialsValidation,updateMaterialsValidation}