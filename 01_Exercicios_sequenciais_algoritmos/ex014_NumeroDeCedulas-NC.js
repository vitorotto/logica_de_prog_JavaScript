// Escrever um programa que leia um valor inteiro (quantia financeira) e informe a quantidade de cédulas de 100, 50, 10, 5, 2 e 1 necessárias para formar esse valor

// Vitor Hugo Otto

const prompt = require(`prompt-sync`)();

var val = prompt('Informe um valor inteiro: ');

// calculo
var quant = val /= 100;
console.log(quant.toFixed(0));
val %= 100;

var quant = val /= 50;
console.log(quant.toFixed(0));
val %= 50;

var quant = val /= 10;
console.log(quant.toFixed(0));
val %= 10;

var quant = val /= 5;
console.log(quant.toFixed(0));
val %= 5;

var quant = val /= 2;
console.log(quant.toFixed(0));
val %= 2;

var quant = val /= 1;
console.log(quant.toFixed(0));
val %= 1;





