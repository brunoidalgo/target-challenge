const numeroInformado = 20;
let numero1 = 1;
let numero2 = 0;
let fibonacciNum;
let listaFibonacci = [];

for (let i = 0; i <= numeroInformado; i++) {
    console.log(listaFibonacci);
    fibonacciNum = numero1 + numero2;
    numero2 = numero1;
    numero1 = fibonacciNum;
    listaFibonacci.push(fibonacciNum);
}
if (listaFibonacci.find(num => num == numeroInformado)) {
    console.log(`${numeroInformado} pertence a lista de Fibonacci`);
}
else {
    console.log(`${numeroInformado} não pertence a lista de Fibonacci`);
}