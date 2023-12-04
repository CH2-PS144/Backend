const Joi = require("joi")

const creatQuestionValidation = Joi.object({
    questions: Joi.string().max(1000).required()
})
const DataByIdQuestionValidation =  Joi.string().max(100).required();

const deleteAllDataQuestionValidation = Joi.object({
    id:Joi.string().max(100).required(),
    questions: Joi.string().max(1000).required(),
    answer: Joi.string()

})
module.exports = {DataByIdQuestionValidation,deleteAllDataQuestionValidation}