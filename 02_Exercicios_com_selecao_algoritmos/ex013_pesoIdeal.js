// Vitor Hugo Otto

/**
 * Escrever um programa que leia a altura e o sexo de uma pessoa e calcule o seu peso ideal utilizando as seguintes fórmulas:
 *  - para homens: (72.7 * altura) - 58
 *  - para mulheres: (61.2 * altura) - 44.7
 */

const prompt = require(`prompt-sync`)();

let {h, sex} = entrada();
calcPeso(h, sex);

function entrada() {
    let h = parseFloat(prompt('Informe a sua altura em metros: (ex: 1.75) '));
    while (isNaN(h)) {
        console.log('Valor incorreto! Digite novamente.');
        h = parseFloat(prompt('Informe a sua altura: '));
    };
    let sex = prompt('Informe seu sexo: (M/F) ').toUpperCase();
    while (sex !== 'M' && sex !== 'F') {
        console.log('Valor incorreto! Digite novamente.');
        sex = prompt('Informe sua idade: ').toUpperCase();
    };
    return {h,sex};
}

function calcPeso(h, sex) {
    if (sex === 'M') {
        console.log(`Seu peso ideal é: ${((72.7 * h) - 58).toFixed(2)}`);
    } else {
        console.log(`Seu peso ideal é: ${((61.2 * h) - 44.7).toFixed(2)}`);
    };
};