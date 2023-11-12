const { app } = require("./application/app.js");
const logger = require("./application/logging.js");

const PORT = 8080;

app.listen(PORT, () => {
  logger.info(`Application server on ${PORT} running...`);
});
