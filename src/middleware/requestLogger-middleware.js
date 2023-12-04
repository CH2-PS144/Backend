const { bold, green } = require('kleur');

function requestLogger (req, res, next) {
    const timeNow = new Date().toISOString()
    console.log(bold().yellow().bgRed().italic(`${req.method} url:: ${req.url} ${timeNow}`));

    return next();
}
module.exports = requestLogger