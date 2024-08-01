// Vitor Hugo Otto

/**
 * 17) Escrever um programa que leia 2 valores inteiros e e um caractere e realize
 * uma das quatro operações aritméticas básicas entre estes dois valores. A operação
 * a ser realizada é dada pelo caractere (+, -, *, /).
 */

const prompt = require(`prompt-sync`)();

function entrada() {
    let a = parseInt(prompt('a: '));
    let op = prompt('op: ');
    let b = parseInt(prompt('b: '));
    return {a, op, b};
}

function calc(a, op, b) {
    if (op === '+') {
        console.log('Resultado: ' + (a + b));
    } else if (op === '-') {
        console.log('Resultado: ' + (a - b));
    } else if (op === '*') {
        console.log('Resultado: ' + (a * b));
    } else if (op === '/') {
        console.log('Resultado: ' + (a / b));
    }
}

// Utilização das funções
let {a , op, b} = entrada();
calc(a, op, b);

