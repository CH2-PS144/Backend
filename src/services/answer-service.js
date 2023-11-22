const validate = require("../validation/validation")
const {DataByIdAnswerValidation,deleteAllDataAnswerValidation} = require("../validation/answer-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");


const createDataAnswerService = async (body) => {
    const {questionAnswer, active, questionId } = body

    if(!(questionAnswer && active && questionId)){
        throw new ResponseError(400, 'field is required', true);
    }

    const createQuestion = await prisma.answer.create({
        data: {
            questionAnswer: body.questionAnswer,
            question: {
                connect: {
                    id:body.questionId
                },
            },
            active: body.active,
        },
        select: {
            question: {
                select: {
                    id: true,
                    questions: true,
                },
            },
            id: true,
            questionAnswer: true,
            active: true,
        },
    })
    if (!createQuestion) {
        throw new ResponseError(400, '');
    }
    return createQuestion;

}
const getALlDataAnswerService = async () => {
    return prisma.answer.findMany({
        select: {
            id: true,
            questionAnswer: true,
            active: true,
            question: {
                select: {
                    id: true,
                    questions: true
                }
            }
        }
    })
}
const getDataAnswersByIdService = async (answerId) => {
    answerId = validate(DataByIdAnswerValidation, answerId)
    const getData = await prisma.answer.findUnique({
    where: {
        id: answerId
    }, select: {
            question: {
                select: {
                    id: true,
                    questions: true
                }
            },
            id: true,
            questionAnswer: true,
            active: true,

        }
    })
    if(!getData){
        throw new ResponseError(400, `material with id ${answerId} not found`, true)
    }
    return getData
}

const updateDataAnswerService = async (body) => {
    const {questionAnswer, active} = body

    if(!(questionAnswer && active)){
        throw new ResponseError(400, 'field is required', true);
    }
    return prisma.answer.update({
        where: {
            id: body.id
        },
        data: {
            questionAnswer: body.questionAnswer
        },
        select: {
            id: true,
            questionAnswer: true,
            active: true,
            question: {
                select: {
                    id: true,
                    questions: true
                }
            }
        }
    })
}
const deleteDataAnswerService = async (answerId) => {
    answerId = validate(DataByIdAnswerValidation, answerId)
    const checkInDataBase = await prisma.answer.count({
        where: {
            id: answerId
        }
    })
    if (checkInDataBase !== 1) {
        throw  new ResponseError(404, `question with id ${answerId} not found`, true)
    }

    return prisma.answer.delete({
        where: {
            id: answerId
        },
        select: {
            id: true,
            questionAnswer: true,
            active:true
        }
    })
}

const DeleteAllDataAnswerService = async (request) => {
    const Delete = validate(deleteAllDataAnswerValidation, request)
    return prisma.answer.deleteMany({
        data: Delete
    })
}
module.exports = {createDataAnswerService,getALlDataAnswerService,getDataAnswersByIdService,updateDataAnswerService,deleteDataAnswerService,DeleteAllDataAnswerService}