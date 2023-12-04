function reqValidation (req, res, next) {
    if (req.method !== 'POST') {
        return next();
    }
    next();
}
module.exports = reqValidation