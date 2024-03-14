const mongoose = require('mongoose');

const FaltaSchema = new mongoose.Schema({
     nome: { 
        type: String, 
        require: true    
     }
});


module.exports = mongoose.model('falta', FaltaSchema);














