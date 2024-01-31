const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const valida = require("class-validator");
const {isEmail} = require('validator');



const UsuarioSchema = new mongoose.Schema({
    login: { 
        type: String, 
        required: [true, 'Coloque um login'],
        unique: true,
        lowercase: true,
        minlength: [5, 'Coloque pelo menos 5 caracteres']          
        
    },
    
    password: { 
        type: String, 
        required: [true, 'Coloque uma senha'],
        minlength: [4, 'Pelo menos 4 caracteres para senha']
    },  
});

UsuarioSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
//static method login in user       

UsuarioSchema.statics.login = async function(login, password) {
    const user = await this.findOne({login});
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('Senha incorreta');
    }
    throw Error('Login Incorreto')
}


module.exports = mongoose.model('usuario42', UsuarioSchema);








