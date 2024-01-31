const mongoose = require('mongoose');
const usuarioSchema = require('../models/UsuarioModel');
const Usuario = require('../models/UsuarioModel');
const passport = require('passport');
const { REPLServer } = require('repl');

//GET
exports.loginGet = (req, res) => {
  
    res.render('login')
} 

//POST
exports.loginPost = (req, res) => {
  const username = req.body.login;
  const password = req.body.senha;

  const user = new Usuario({
    username:username,
    password:password
  })

req.login(user, function(err, user){
  if(err){
    console.log(err)
  } else {
    passport.authenticate('local')(req, res, () => {
      res.render('cadastro');
    })
  }
}) 
}