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
        numero: req.body.numero
    })  
    res.redirect('/pedido')     
}

//GET PESQUISAR PEDIDO
exports.pedidoPesquisaGet = async (req, res) => {              
        try {const pedidoBD = await Pedido.find({});                
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
