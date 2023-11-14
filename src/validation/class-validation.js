const Joi = require("joi");

const getClassValidationById = Joi.string().max(100).required();

const getAllDataClassValidation = Joi.object({
    id:Joi.string().max(100).required(),
    name:Joi.string().max(5).required()
})

// const getDataAllClassValidation = Joi.object({
//     id:Joi.number().positive().required(),
//     name:Joi.string().max(5).required()
// })

const createClassValidation = Joi.object({
    name: Joi.string().max(5).required()
});

// const updateClassValidation = joi.object({
//     name : Joi.string().max(5).required()
// })

// const updateClassValidation = Joi.object(({
//     id: Joi.number().positive(190).required(),
//  name: Joi.string.max(5).required()
// }))
module.exports = {createClassValidation,getClassValidationById,getAllDataClassValidation}
