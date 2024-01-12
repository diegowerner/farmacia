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
    
    res.send('Produto cadastrado com sucesso! <a href="https://estoque-farmacia.cyclic.app/cadastro"><button>Cadastrar novamente</button></a><a href="https://estoque-farmacia.cyclic.app/pesquisa"><button>Pesquisar</button></a>'); 
    
}