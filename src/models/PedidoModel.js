const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
     nome: { 
        type: String, 
        require: true
    },
     quem_pediu: { 
        type: String, 
        require: true
    },
     reposicao: { 
        type: String, 
        require: true
    },
    quando_pediu: { 
        type: Date, 
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    qtd: {
        type: Number,
        require: true
    },
    barras: {
        type: Number,
        require: true
    },
});


module.exports = mongoose.model('pedido', PedidoSchema);














