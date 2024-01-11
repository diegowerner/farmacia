const bodyParser = require('body-parser');

exports.loginResultado = (req, res) => {
    console.log(req.body.login, req.body.password)
    res.render('home');
}

exports.login = (req, res) => {
    
}