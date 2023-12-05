const prisma = require("../application/database")

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
                    idAnswer: master.questions,
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

module.exports = {getDataQuizService,submitAnswer}


