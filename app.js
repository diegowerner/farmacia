const path = require('path');

const mod1 = require('./mod1');
    console.log(mod1.nome, mod1.sobrenome)
    console.log(mod1.falaNome());

const {Pessoa} = require('./mod1');
    const p1 = new Pessoa('Diego');

console.log(p1);
console.log(__dirname);
