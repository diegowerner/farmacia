module.exports = (req, res, next) => {
    console.log();
    console.log("Passei no Middleware global");
    console.log();
    next();
}