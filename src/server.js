const { app } = require("./application/app.js");
const logger = require("./application/logging.js");

const PORT = process.env.LOCAL_APP_PORT;

app.listen(PORT, () => {
  logger.info("Application rerver running...");
});
