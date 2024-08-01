// Vitor Hugo Otto

/**
 * 16) Escrever um programa que leia 3 valores inteiros e calcule a média
 * ponderada considerando os seguintes pesos: 5 para o maior valor, 3 para o
 * valor intermediário e 2 para o menor valor
 */

const prompt = require(`prompt-sync`)();

let {a, b, c} = entrada();
calcular(a, b, c); 

function entrada() {
    let a = parseInt(prompt('Insira o primeiro valor: '));
    let b = parseInt(prompt('Insira o segundo valor: '));
    let c = parseInt(prompt('Insira o terceiro valor: '));
    return {a, b, c};
};

function calcular(a, b, c) {
    let maior = -1;
    let menor = -1;

    // Selecionando o maior valor
    if (a > b && a > c) {
        maior = a;
    } else if (b > a && b > c) {
        maior = b;
    } else {
        maior = c;
    }
    

    // Selecionando o menor valor
    if (a < b && a < c) {
        menor = a;
    } else if (b < a && b < c) {
        menor = b;
    } else {
        menor = c;
    }

    // Selecionando o intermediário
    let meio = (a + b + c) - (maior + menor);

    console.log(`A média ponderada é: ${((maior * 5) + (meio * 3) + (menor * 2)) / (5 + 3 + 2)}`);
    console.log('Maior: ' + maior);
    console.log('Intermediário: ' + meio);
    console.log('Menor: ' + menor);
}