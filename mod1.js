const nome = 'Diego';
const sobrenome = 'Werner';

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

