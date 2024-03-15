const Falta = require('../models/FaltaModel');
const mongoose = require('mongoose').MongoClient;

//GET FAZER PEDIDO
exports.faltaGet = (req, res) => {        
    res.render('falta')
 }

//POST FAZER PEDIDO
exports.faltaPost = (req, res) => {
    Falta.create({
        nome: req.body.nome 
    })  
    res.redirect('/falta')     
}


//GET PESQUISAR PEDIDO
exports.faltaPesquisaGet = async (req, res) => {              
        try {
            const faltaBD = await Falta.find({});                
            return res.render('faltas', {faltaBD}); 
        } catch (err){
            res.status(500).send({error: err.message});
        }             
    } 

  
   
//POST PESQUISAR PEDIDO  

exports.faltaPesquisaPost = (req, res, next) => {      
    res.render('faltas');
}
    


//DELETAR PEDIDO
exports.deletarFalta = async (req, res, next) => {
    await Falta.findByIdAndDelete({_id: req.params.id})
    .then(
        res.redirect('/faltas')
    );        
}

//EDITAR
exports.getEditarFalta = (req, res) => {
    
    Falta.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
    .then(docs => {
        res.render('faltaEdit', {faltas: docs});        
    })   
};

exports.postEditarFalta = (req, res) => {

    Falta.findOneAndUpdate({_id:req.params.id}, req.body)
    .then(docs => {
        res.redirect('/faltas');        
    })   
};