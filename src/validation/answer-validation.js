const Joi = require("joi")

const creatAnswerValidation = Joi.object({
    questions: Joi.string().max(1000).required()
})
const DataByIdAnswerValidation =  Joi.string().max(100).required();

const deleteAllDataAnswerValidation = Joi.object({
    id:Joi.string().max(100).required(),
    questionAnswer: Joi.string().required(),
    active: Joi.boolean()
})

module.exports = {DataByIdAnswerValidation,deleteAllDataAnswerValidation}