// Vitor Hugo Otto

/**
 * escrever um programa que leia 3 valores inteiros e verifique se eles podem
 * ser os lados de um triângulo (cada lado deve ser menor que a soma dos
 * outros dois lados). se forem informar qual o tipo de triângulo que eles
 * formam: equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3
 * lados diferentes).
 */

const prompt = require(`prompt-sync`)();

let {v1, v2, v3} = entrada();
verificarTriangulo(v1, v2, v3);

function entrada() {
    let v1 = parseInt(prompt('Informe o primeiro valor: '));
    while (isNaN(v1)) {
        console.log('Valor incorreto! Digite novamente.');
        v1 = parseInt(prompt('Informe o primeiro valor: '));
    }
    let v2 = parseInt(prompt('Informe o primeiro valor: '));
    while (isNaN(v2)) {
        console.log('Valor incorreto! Digite novamente.');
        v2 = parseInt(prompt('Informe o primeiro valor: '));
    }
    let v3 = parseInt(prompt('Informe o primeiro valor: '));
    while (isNaN(v3)) {
        console.log('Valor incorreto! Digite novamente.');
        v3 = parseInt(prompt('Informe o primeiro valor: '));
    }
    return {v1, v2, v3};
}

function verificarTriangulo(v1, v2, v3) {
    // verificar se podem ser os lados de um triangulo
    if (!(v1 < (v2 + v3) && v2 < (v1 + v3) && v3 < (v1 + v2))) { // Se nao for triangulo
        console.log('Não podem ser considerados lados de um triangulo');
    } else if (v1 === v2 && v2 === v3) { // se for equilatero
        console.log('Equilátero.');
    } else if ((v1 == v2 && v3 != v1) || (v1 == v3 && v2 != v1) || (v2 == v3 && v1 != v3 )) { // se for isósceles
        console.log('Isósceles.')
    } else { // se nõ for nenhum, é o escaleno
        console.log('Escaleno.');
    }
}