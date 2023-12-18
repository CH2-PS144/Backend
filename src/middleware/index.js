const reqLogger = require('./requestLogger-middleware');
const reqValidation = require('./reqValidation-middleware');
const fileStorageImage = require('./photo-middleware');

module.exports = { reqLogger, reqValidation, fileStorageImage };
