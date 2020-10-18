function log(req, res, next) {
    console.log("I\'M IN THE MIDDLEWARE");
    next();
}

module.exports = {
    log
}