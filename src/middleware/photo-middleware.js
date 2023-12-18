// const multer = require('multer');
//
// const fileStorageImage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './assets/');
//     },
//     filename: (req, file, cb) => {
//         const sanitizeName = file.originalname.replace(/\s+/g, '-');
//         cb(null, `${new Date().getTime()}-${sanitizeName}`);
//     },
// });
//
// module.exports = fileStorageImage