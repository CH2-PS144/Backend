const Joi = require("joi");

const getClassValidationById = Joi.string().max(100).required();

const getAllDataClassValidation = Joi.object({
    id:Joi.string().max(100).required(),
    name:Joi.string().max(5).required()
})

const updateClassValidation = Joi.object({
    id:Joi.string().max(100).required(),
    name:Joi.string().max(5).required()
})

const createClassValidation = Joi.object({
    name: Joi.string().max(5).required()
});

const deleteAllDataClassValidation = Joi.object({
    id:Joi.string().max(100).required(),
    name:Joi.string().max(5).required()
})
module.exports = {createClassValidation,getClassValidationById,getAllDataClassValidation,updateClassValidation,deleteAllDataClassValidation}
