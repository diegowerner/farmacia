const { REPLServer } = require('repl');
const Cadastro = require('../models/CadastroModel');
const mongoose = require('mongoose').MongoClient;
const passport = require('passport');



//GET
exports.cadastroGet = (req, res) => {        
    res.render('cadastro')
 }

//POST
exports.cadastroPost = (req, res) => {
    Cadastro.create({
        barras: req.body.barras,
        nome: req.body.nome,
        caixa: req.body.caixa,
        qtd: req.body.qtd,
        vencimento: req.body.vencimento
    })  
    res.redirect('/cadastro')     
}

//DELETAR
exports.deletar = async (req, res, next) => {
    await Cadastro.findByIdAndDelete({_id: req.params.id})
    .then(
        res.redirect('/pesquisa')
    );        
}

//EDITAR
exports.getEditProductPage = (req, res) => {
    
    Cadastro.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then(docs => {
        res.render('edit', {pesquisa: docs});        
    })   
};

exports.postEditProductPage = (req, res) => {

    Cadastro.findOneAndUpdate({_id:req.params.id}, req.body)
    .then(docs => {
        res.redirect('/pesquisa');        
    })   
};