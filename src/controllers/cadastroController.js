const Cadastro = require('../models/CadastroModel');

//GET
exports.cadastro = (req, res) => {    
     res.render('cadastro');    
 }
//POST
exports.cadastroFeito = (req, res) => {
    Cadastro.create({
        barras: req.body.barras,
        nome: req.body.nome,
        caixa: req.body.caixa,
        qtd: req.body.qtd,
        vencimento: req.body.vencimento
    })
    
    res.send('Produto cadastrado com sucesso! <a href="http://estoque-farmacia.onrender.com/cadastro"><button>Cadastrar novamente</button></a><a href="http://estoque-farmacia.onrender.com/"><button>Pesquisar</button></a>'); 
    
}