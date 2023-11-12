// const supertest = require("supertest")
// const web = require("../src/application/app")
// const logger = require("../src/application/logging")
// const {prismaClient} = require("../src/application/database");
//
// describe("POST /api/class", function () {
//     afterEach(async () => {
//         await prismaClient.class.deleteMany({
//             where: {
//                 name: "VII"
//             }
//         })
//     })
//     it("new class data added!", async () => {
//         const result = await supertest(web)
//             .post("/api/class")
//             .send({
//                 name: "VII"
//             })
//         logger.info(result)
//         expect(result.status).toBe(201)
//         expect(result.body.data.name).toBe("VII")
//     })
// })
