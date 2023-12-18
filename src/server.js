  const { app } = require("./application/app");
  const logger = require("./application/logging");
  const dotenv = require('dotenv');
  
  dotenv.config();
  
  const config = {
    app: {
      port: parseInt(process.env.LOCAL_APP_PORT),
    },
  }
  
  app.listen(config.app.port, () => {
    logger.info(`Application server on ${config.app.port} running...`);
  });