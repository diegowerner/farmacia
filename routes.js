const mongoose = require('mongoose').MongoClient;
const express = require('express');
const route = express.Router();


const requireAuth = require('./src/middlewares/middleware');
const authController = require('./src/controllers/authController');
const cadastroController = require('./src/controllers/cadastroController');
const pesquisaController = require('./src/controllers/pesquisaController');
const pedidoController = require('./src/controllers/pedidoController');
const faltaController = require('./src/controllers/faltaController');


//Cookies
route.get('/set-cookies', (req, res) => {
    //res.setHeader('Set-Cookie', 'newUser=true');
res.cookie('newUser', false);
res.cookie('Usuario', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true});

    res.send('Cookies!');
});

route.get('/read-cookies', (req, res )=> {
    const cookies = req.cookies;
    console.log(cookies.newUser);

    res.json(cookies);
})


//Rotas Login
route.get('/', authController.loginGet);
route.post('/', authController.loginPost);  

//Rota Cadastro Usuario
route.get('/cadastraruser', authController.cadastrarUsuarioGet);
route.post('/cadastraruser', authController.cadastrarUsuarioPost);


//Rotas Falta
route.get('/falta', requireAuth, faltaController.faltaGet);
route.post('/falta', requireAuth, faltaController.faltaPost);

route.get('/faltas', requireAuth, faltaController.faltaPesquisaGet);
route.get('/faltas', requireAuth, faltaController.faltaPesquisaPost);

route.get('/editarFalta/:id', requireAuth, faltaController.getEditarFalta);
route.post('/editarFalta/:id', requireAuth, faltaController.postEditarFalta);

//Delete
route.get('/deletarPedido/:id', requireAuth, faltaController.deletarFalta);



//Rota Opcoes
route.post('/opcoes', requireAuth, authController.opcoesPost);
route.get('/opcoes', requireAuth, authController.opcoesGet);

//Rota Cadastro Itens
route.get('/cadastro', requireAuth, cadastroController.cadastroGet);
route.post('/cadastro', requireAuth,cadastroController.cadastroPost);

// Rotas Pesquisar Itens
route.get('/pesquisa', requireAuth, pesquisaController.pesquisarGet);
route.post('/pesquisa', requireAuth, pesquisaController.pesquisarPost);

//Update
route.get('/edit/:id', requireAuth, cadastroController.getEditProductPage);
route.post('/edit/:id', requireAuth, cadastroController.postEditProductPage);

//Delete
route.get('/deletar/:id', requireAuth, cadastroController.deletar);

//Pedido

route.get('/pedido', requireAuth, pedidoController.pedidoGet);
route.post('/pedido', requireAuth, pedidoController.pedidoPost);

route.get('/pedidos', requireAuth, pedidoController.pedidoPesquisaGet);
route.post('/pedidos', requireAuth, pedidoController.pedidoPesquisaPost);

route.get('/deletarPedido/:id', requireAuth, pedidoController.deletarPedido);

route.get('/editarPedido/:id', requireAuth, pedidoController.getEditarPedido);
route.post('/editarPedido/:id', requireAuth, pedidoController.postEditarPedido);

module.exports = route;