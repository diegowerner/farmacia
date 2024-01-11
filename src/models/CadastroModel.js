const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
    barras: { 
        type: String, 
        require: true
    },
    nome: { 
        type: String, 
        require: true
    },
    qtd: { 
        type: String, 
        require: true
    },
    caixa: { 
        type: String, 
        require: true
    },
    vencimento: { 
        type: Date, 
        require: true
    }
});


module.exports = mongoose.model('cadastro2', CadastroSchema);