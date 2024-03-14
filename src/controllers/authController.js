const User = require('../models/UsuarioModel');
const jwt = require('jsonwebtoken');

//Caminhos Opcoes

exports.opcoesPost = async (req, res) => {
    res.render('opcoes');
  }
exports.opcoesGet = async (req, res) => {
    res.render('opcoes');
  }
  


exports.loginPost = async (req, res) => {
    const {login, password} = req.body;

    try {
        const user = await User.login(login, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({ user: user._id})
        
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({});
    }
}
exports.loginGet = (req, res) => {
    res.render('login');
}


//handle erros
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { login: '' , password: ''};


    //email incorreto - login
    if (err.message === 'Login Incorreto') {
        errors.login = 'Login não registrado';
        return errors;
    }
    if (err.message === 'Senha incorreta') {
        errors.password = 'Senha incorreta';
        return errors;
    }
    //email incorreto - cadastro
    if (err.message === 'Coloque um login') {
        errors.login = 'Coloque um login'
        return errors;
    }
    if (err.message === 'Coloque pelo menos 5 caracteres') {
        errors.login = 'Coloque pelo menos 5 caracteres'
        return errors;
    }

    //senha incorreta - cadastro

    if (err.message === 'Coloque uma senha') {
        errors.password = 'Coloque uma senha'
        return errors;
    } 
    if (err.message === 'Pelo menos 4 caracteres para senha') {
        errors.password = 'Pelo menos 4 caracteres para senha'
        return errors;
    } 
    //duplo
    if (err.code === 11000) {
    errors.login = 'Login já cadastrado';
    return errors;
    }

    //erro de validação
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }  

    return errors;
}
const maxAge = 3 * 60 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'secredinhoww', {
        expiresIn: maxAge
    });
}



//GET
exports.cadastrarUsuarioGet = (req, res) => {
    res.render('cadastraruser')
    
}
//POST

exports.cadastrarUsuarioPost = async (req, res) => {
    const {login, password} = req.body;

    try {
        const user = await User.create({ login, password });
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({ user: user._id});

    } 
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json ({ errors });
    }
}


