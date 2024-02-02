const mongoose = require('mongoose').MongoClient;
const Pesquisa = require('../models/CadastroModel');



//GET
exports.pesquisarGet = async (req, res) => {  
    try {        
        const pesquisaBD = await Pesquisa.find(
            { $or: [
            {barras: {$regex: `${req.query.pesquisa}`, $options: 'i'}},
            {nome: {$regex: `${req.query.pesquisa}`, $options: 'i'}},
            {caixa: {$regex: `${req.query.pesquisa}`, $options: 'i'}}           
        ]}).sort({"vencimento":1});                
        return res.render('pesquisar', {pesquisaBD});              
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}
  
   
//POST
  

exports.pesquisarPost = (req, res, next) => {      
    res.render('pesquisar');
}
    

