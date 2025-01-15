const faturamentoMensal = [
    { "uf": "SP", "valor": 67.83643 },
    { "uf": "RJ", "valor": 36.67866 },
    { "uf": "MG", "valor": 29.22988 },
    { "uf": "ES", "valor": 27.16548 },
    { "uf": "Outros", "valor": 19.84953 }
]

// Valor total de todos os estados
let total = 0;
faturamentoMensal.forEach((atual) => total += atual.valor);
console.log(`Valor total R$${Intl.NumberFormat().format(total)} para 100%\n`);

// Porcentagem de cada estado
faturamentoMensal.forEach((atual) => {
    let porcentagem = (atual.valor / total) * 100;
    console.log(`${parseFloat(porcentagem.toFixed(2))}% para o estado ${atual.uf}`);
}) 