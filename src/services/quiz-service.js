    const prisma = require("../application/database")
    const validate = require("../validation/validation");
    const {getClassValidationById} = require("../validation/class-validation");
    const {deleteAllDataQuestionValidation} = require("../validation/quiz-validation");
    const {ResponseError} = require("../error/response-errror");
    const createService = async (body) => {
        const convertAnswer = JSON.stringify(body.answer)
        const mergedObject = { ...body, answer: convertAnswer };

        let variableQuery = await prisma.quiz.create({
            data: mergedObject,
            select: {
                id: true,
                questions: true,
                answer: true
            }
        })
        variableQuery.answer = JSON.parse(variableQuery.answer)
      return variableQuery
    }
    const getAllService = async () => {
        const questions = await prisma.quiz.findMany({
            select: {
                id: true,
                questions: true,
                answer: true,
                material: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
        })
        const getData = questions.map((question) => {
            return {
                ...question,
                answer: JSON.parse(question.answer),
            };
        });
        return getData
    };

    const getById = async (quizId) => {
        quizId = validate(getClassValidationById, quizId)
        const classes = await prisma.quiz.findUnique({
            where: {
                id: quizId
            },
            select: {
                id: true,
                questions: true,
                answer: true,
                material: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
        })
        if (!classes) {
            throw new ResponseError("400", `quiz with id ${quizId} not found`,true)
        }
        const formattedQuiz = {
            ...classes,
            answer: JSON.parse(classes.answer),
        };

        return formattedQuiz;
    }
    const updateDataService = async (body) => {
        const convertAnswer = JSON.stringify(body.answer)
        const mergedObject = { ...body, answer: convertAnswer };

        let variableQuery = await prisma.quiz.update({
            where: {
                id: body.id,
            },
            data: mergedObject,
            select: {
                id: true,
                questions: true,
                answer: true,
            },
        })
        if (variableQuery.answer && typeof variableQuery.answer === 'string') {
            variableQuery.answer = JSON.parse(variableQuery.answer);
        }

        return variableQuery;
    }
    const deleteDataService = async (quizId) => {
        quizId = validate(getClassValidationById, quizId)

        const checkInDataBase = await prisma.quiz.count({
            where: {
                id: quizId
            }
        })
        if (checkInDataBase !== 1) {
            throw  new ResponseError(404, `material with id ${quizId} not found`, true)
        }

        const deletedQuestion = await prisma.quiz.delete({
            where: {
                id: quizId,
            },
            select: {
                id: true,
                questions: true,
                answer: true,
            },
        });

        if (deletedQuestion.answer && typeof deletedQuestion.answer === 'string') {
            deletedQuestion.answer = JSON.parse(deletedQuestion.answer);
        }
        return deletedQuestion;
    }
    const deleteAllDataService = async (request) => {
        const Datas = validate(deleteAllDataQuestionValidation, request)
        const deleteData = await prisma.quiz.deleteMany({
            data: Datas
        })
        return deleteData
    }

    module.exports = {createService,getAllService,getById,updateDataService,deleteDataService,deleteAllDataService}