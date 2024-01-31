const jwt = require('jsonwebtoken');

module.exports = function requireAuth(req, res, next) {
    const token = req.cookies.jwt;

    // check json web token if exists and is verified

    if (token) {
        jwt.verify(token, 'secredinhoww', (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.redirect('/');
            } else {
                console.log(decodedToken)
                next();
            }
        })
    }
    else {
        res.redirect('/')
    }
}
