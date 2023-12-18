const prisma = require("../application/database")
const validate = require("../validation/validation");
const {getClassValidationById} = require("../validation/class-validation");
const {ResponseError} = require("../error/response-errror");

const getDataQuizService = async () => {
    const getDataQuiz = await prisma.quiz.findMany({
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

 return getDataQuiz.map((question) => {
        const parsedAnswers = JSON.parse(question.answer).map(({ isCorrect, ...rest }) => rest);

        return {
            ...question,
            answer: parsedAnswers,
        };
    });
}
const getDataByIdQuiz = async (quizId) => {
    quizId = validate(getClassValidationById, quizId);
    const quiz = await prisma.quiz.findUnique({
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
    });

    if (!quiz) {
        throw new ResponseError("400", `Quiz with id ${quizId} not found`, true);
    }

    const formattedAnswers = JSON.parse(quiz.answer).map(answer => {
        const { isCorrect, ...formattedAnswerWithoutIsCorrect } = answer;
        return formattedAnswerWithoutIsCorrect;
    });

    const formattedQuiz = {
        ...quiz,
        answer: formattedAnswers,
    };

    return formattedQuiz;
};


const submitAnswer = async (body) => {
    const masterData = await prisma.quiz.findMany({
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
    });

    let skore = 0;
    let result = [];
    let currentMaster;

    masterData.forEach(master => {
        body.forEach(bodies => {
            if (master.id === bodies.id) {
                const b = JSON.parse(master.answer).map(e => {

                    e.isCorrectOption = e.option === bodies.option && (e.isCorrect || false);
                    e.isUserSelectedOption = bodies.option === e.option;

                    return e;
                });

                const isAnyCorrect = b.some(e => e.isCorrectOption);

                skore += isAnyCorrect ? 20 : 0;

                result.push({
                    idAnswer: master.id,
                    value: isAnyCorrect,
                });
                currentMaster = master;
            }
        });
    });
    const status = skore >= 80 ? `Anda lulus dengan materi ${currentMaster.material.name}` : `Anda tidak lulus pada materi ${currentMaster.material.name}`;

    return {
        hasil: result,
        skore_Anda: skore,
        description: status,
    };
};

module.exports = {getDataQuizService,submitAnswer,getDataByIdQuiz}


