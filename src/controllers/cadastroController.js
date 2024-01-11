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
    
    res.send('Produto cadastrado com sucesso! <a href="http://localhost:3000/cadastro"><button>Cadastrar novamente</button></a><a href="http://localhost:3000/pesquisa"><button>Pesquisar</button></a>'); 
    
}