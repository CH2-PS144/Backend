const Joi = require("joi");

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
module.exports = {createClassValidation}
