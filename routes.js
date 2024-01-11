const mongoose = require('mongoose').MongoClient;
const express = require('express');
const route = express.Router();
const pesquisaController = require('./src/controllers/pesquisaController');
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');


//Rotas Login
route.get('/', loginController.login)
route.post('/', loginController.loginResultado)

// Rotas Pesquisa
route.get('/pesquisa', pesquisaController.resultado);
route.post('/pesquisa', pesquisaController.pesquisar);

// Rotas Cadastros

route.get('/cadastro', cadastroController.cadastro);
route.post('/cadastro', cadastroController.cadastroFeito);







module.exports = route;