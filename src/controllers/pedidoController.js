const Pedido = require('../models/PedidoModel');
const mongoose = require('mongoose').MongoClient;

//GET FAZER PEDIDO
exports.pedidoGet = (req, res) => {        
    res.render('pedido')
 }

//POST FAZER PEDIDO
exports.pedidoPost = (req, res) => {
    Pedido.create({
        nome: req.body.nome,        
        quem_pediu: req.body.quem_pediu,        
        quando_pediu: req.body.quando_pediu,
        qtd: req.body.qtd,
        numero: req.body.numero,
        reposicao: req.body.reposicao,
        barras: req.body.barras
    })  
    res.redirect('/pedido')     
}


//GET PESQUISAR PEDIDO
exports.pedidoPesquisaGet = async (req, res) => {              
        try {
            const pedidoBD = await Pedido.find({});                
            return res.render('pedidos', {pedidoBD}); 
        } catch (err){
            res.status(500).send({error: err.message});
        }             
    } 

  
   
//POST PESQUISAR PEDIDO  

exports.pedidoPesquisaPost = (req, res, next) => {      
    res.render('pedidos');
}
    


//DELETAR PEDIDO
exports.deletarPedido = async (req, res, next) => {
    await Pedido.findByIdAndDelete({_id: req.params.id})
    .then(
        res.redirect('/pedidos')
    );        
}

//EDITAR
exports.getEditarPedido = (req, res) => {
    
    Pedido.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then(docs => {
        res.render('editPedido', {pedidos: docs});        
    })   
};

exports.postEditarPedido = (req, res) => {

    Pedido.findOneAndUpdate({_id:req.params.id}, req.body)
    .then(docs => {
        res.redirect('/pedidos');        
    })   
};