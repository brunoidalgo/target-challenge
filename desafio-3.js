// Importando JSON
const faturamento = require("./dados.json");

// Lista de dias de faturamento sem zero
const faturamentoSemZeros = faturamento.filter((x) => x.valor > 0);

// Dia de menor faturamento
const diaMenorFaturamento = faturamentoSemZeros.reduce((menor, atual) => {
    return atual.valor < menor.valor ? atual : menor;
})
function valorFormatado(valor) {
    return Intl.NumberFormat().format(valor);
}
console.log(`Dia de menor faturamento: ${diaMenorFaturamento.dia} e valor: R$${valorFormatado(diaMenorFaturamento.valor)}`);


// Dia de maior faturamento
const diaMaiorFaturamento = faturamentoSemZeros.reduce((menor, atual) => {
    return atual.valor > menor.valor ? atual : menor;
})
console.log(`Dia de maior faturamento: ${diaMaiorFaturamento.dia} e valor: R$${valorFormatado(diaMaiorFaturamento.valor)}`);

// Criando array somente de números
const soma = faturamentoSemZeros.map((item) => item.valor);

// Criando a soma do valor total
let total = 0;
soma.forEach((atual) => total += atual, 0);
const media = total / faturamentoSemZeros.length;

console.log(`Media do mês R$${Intl.NumberFormat().format(media)}`);

let dias = 0;
faturamentoSemZeros.forEach((dia) => {
    if (dia.valor > media) {
        dias += 1;
    }
    return dias;
})
console.log(`Quantidade de dias que o faturamento foi maior que a média: ${dias}`)
