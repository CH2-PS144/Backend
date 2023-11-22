const validate = require("../validation/validation")
const {DataByIdQuestionValidation,deleteAllDataQuestionValidation} = require("../validation/question-validation")
const prisma = require("../application/database")
const {ResponseError} = require("../error/response-errror");
const {deleteAllDataAnswerValidation} = require("../validation/answer-validation");


const createQuestionService = async (body) => {
    const {questions,materialId} = body

    if (!(questions && materialId)) {
        throw new ResponseError(400, 'field is required', true);
    }

    const checkExitingQuestions = await prisma.question.count({
        where: {
            questions: body.questions
        }
    })
    if (checkExitingQuestions === 1) {
        throw new ResponseError(400, "question already used", true)
    }
    return prisma.question.create({
        data: {
            questions: body.questions,
            material: {
                connect: {
                    id:body.materialId
                },
            },
        },
        select: {
            id: true,
            questions: true,
            material: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

const getAllDataQuestionService = async () => {
    return prisma.question.findMany({
        select: {
            id: true,
            questions: true,
            material: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

const getDataByIdQuestionService = async (questionId) => {
    questionId = validate(DataByIdQuestionValidation, questionId)

  const question = await prisma.question.findUnique({
      where: {
        id: questionId
      },
      select: {
          id: true,
          questions: true,
          material: {
              select: {
                  id: true,
                  name: true
              }
          }
      }
  })
  if (!question) {
      throw new ResponseError(400, `question with id ${questionId} not found`, true)
  }
  return question
}

const updateDataQuestionService = async (body) => {
    const {questions} = body

    if (!(questions)) {
        throw new ResponseError(400, "field is required", true)
    }
    const checkExitingQuestion = await prisma.question.count({
        where: {
            id: body.id
        }
    })
    if (checkExitingQuestion !== 1)
        throw new ResponseError(404, `question with id ${body.id} not found`, true)

    return prisma.question.update({
        where: {
            id: body.id
        },
        data: {
            questions: body.questions
        },
        select: {
            id: true,
            questions: true,
            material: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

const deleteDataQuestionService = async (questionId) => {
    questionId = validate(DataByIdQuestionValidation, questionId)
    const checkInDataBase = await prisma.question.count({
        where: {
            id: questionId
        }
    })
    if (checkInDataBase !== 1) {
        throw  new ResponseError(404, `question with id ${questionId} not found`, true)
    }
    return prisma.question.delete({
        where: {
            id: questionId
        },
        select: {
            id: true,
            questions: true
        }
    })
}
const deleteAllDataQuestionService = async (request) => {
    const Delete = validate(deleteAllDataQuestionValidation, request)
    return prisma.question.deleteMany({
        data: Delete
    })
}
module.exports = {
    createQuestionService,getAllDataQuestionService,updateDataQuestionService,getDataByIdQuestionService,deleteDataQuestionService,deleteAllDataQuestionService
}