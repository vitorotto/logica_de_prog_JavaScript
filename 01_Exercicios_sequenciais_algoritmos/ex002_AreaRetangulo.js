/* Escreva um programa para calcular a área de um retângulo sendo fornecidas as suas dimensões (base x altura). */

const prompt = require('prompt-sync')()

const a = prompt("Informe o valor da altura: ")
const b = prompt("Informe o valor da base: ")

console.log(`A área é: ${a * b}`)