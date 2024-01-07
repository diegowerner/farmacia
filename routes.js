const mongoose = require('mongoose').MongoClient;
const express = require('express');
const route = express.Router();
const pesquisaController = require('./src/controllers/pesquisaController');
const cadastroController = require('./src/controllers/cadastroController');


// Rotas Pesquisa
route.get('/', pesquisaController.resultado);
route.post('/', pesquisaController.pesquisar);

// Rotas Cadastros

route.get('/cadastro', cadastroController.cadastro);
route.post('/cadastro', cadastroController.cadastroFeito);







module.exports = route;