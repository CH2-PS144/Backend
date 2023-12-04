const supertest = require("supertest");
const {app} = require("../src/application/app");
const logger = require("../src/application/logging");
const  prisma = require("../src/application/database");

describe("POST /api/class", function () {
    afterEach(async () => {
        // Use try-catch to log any potential errors during cleanup
        try {
            await prisma.class.deleteMany({
                where: {
                    name: "VII"
                }
            });
        } catch (error) {
            logger.error(`Error during cleanup: ${error.message}`);
        }
    });

    it("should add new class data", async () => {
            const result = await supertest(app)
                .post("/api/class")
                .send({
                    name: "VII"
                });
            logger.info(result);

            // Assertions
            expect(result.status).toBe(201);
            expect(result.body.status).toBe("success");
            expect(result.body.message).toBe("new class data added!");
            expect(result.body.data.name).toBe("VII");
    });
});


