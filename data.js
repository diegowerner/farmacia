const hoje = new Date();
const databd = new Date(2023, 1, 10);

databd.setFullYear(hoje.getFullYear());

const msPorDia= 24*60*60*1000;

const diasRestantes= (databd.getTime() - hoje.getTime()) / msPorDia;

const aredondaDias = Math.round(diasRestantes);

console.log(aredondaDias)


if (aredondaDias > 60) {
    console.log('Normal')
} else if (aredondaDias < 60 && aredondaDias > 30){
    console.log('Amarelo')
} else if (aredondaDias < 30) {
    console.log('Vermelho')
}

console.log(hoje.toLocaleDateString(), databd.toLocaleDateString())