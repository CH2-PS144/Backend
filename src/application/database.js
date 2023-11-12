const { logger } = require("./logging");
const {PrismaClient} = require ("@prisma/client");

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'info',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ],
});

prisma.$on('error', (e) => {
 console.log(e)
});

prisma.$on('warn', (e) => {
  console.log(e)
});

prisma.$on('info', (e) => {
  console.log(e)
});

prisma.$on('query', (e) => {
  console.log(e)
});

module.exports = prisma;