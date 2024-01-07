const mongoose = require('mongoose').MongoClient;
const Pesquisa = require('../models/CadastroModel');


//GET
exports.resultado = async (req, res) => {      
    try {        
        const pesquisaBD = await Pesquisa.find(
            { $or: [
            {barras: {$regex: `${req.query.pesquisa}`, $options: 'i'}},
            {nome: {$regex: `${req.query.pesquisa}`, $options: 'i'}},
            {caixa: {$regex: `${req.query.pesquisa}`, $options: 'i',}},
        ]});    
                  console.log(pesquisaBD); 
        return res.render('index', {pesquisaBD});              
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}
   
//POST
exports.pesquisar = (req, res) => {  
    }
    

