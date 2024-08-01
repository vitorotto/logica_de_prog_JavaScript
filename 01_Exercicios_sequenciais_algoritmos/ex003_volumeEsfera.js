/* Escrever um programa para calcular o volume de uma esfera sendo fornecido o valor de seu raio */

const prompt = require(`prompt-sync`)();

const raio = prompt('Informe o valor do raio: ');
const PI = 3.14;

// calculo
console.log(`O volume da esfera é: ${(((raio * raio * raio) * PI) * (4 / 3)).toFixed(2)}`);