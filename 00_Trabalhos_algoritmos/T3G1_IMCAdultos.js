// Vitor Hugo Otto

/**
 * O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para
 * dar uma indicação sobre a condição de peso de uma pessoa adulta.
 * 
 * Escrever um programa que leia o nome, a idade, o peso e a altura de uma pessoa e 
 * mostre sua condição de acordo com a tabela abaixo. Essa tabela somente é válida
 * para pessoas adultas (idade entre 18 e 65 anos).
 * 
 * A fórmula é IMC = peso/(altura)²
 * 
 * ------------------------------------
 * | IMC em Adultos  | Condição       |
 * ------------------------------------
 * | Abaixo de 18.5  | Abaixo do peso |
 * | Entre 18.5 e 25 | Peso normal    |
 * | Entre 25 e 30   | Acima do peso  |
 * | Acima de 30     | Obeso          |
 * ------------------------------------
 */

prompt = require(`prompt-sync`)();

function mostrarCondicao(nome, imc) {
    console.log('\nRESULTADO: ');
    if (imc < 18.5) {
        console.log(`${nome} está abaixo do peso.`);
        console.log(`IMC: ${(imc).toFixed(2)}\n`);
    } else if (imc >= 18.5 && imc < 25) {
        console.log(`${nome} está no peso normal.`);
        console.log(`IMC: ${(imc).toFixed(2)}\n`);
    } else if (imc >= 25 && imc <= 30) {
        console.log(`${nome} está acima do peso.`);
        console.log(`IMC: ${(imc).toFixed(2)}\n`);
    } else {
        console.log(`${nome} está obeso.`);
        console.log(`IMC: ${(imc).toFixed(2)}\n`);
    }
}

function calcIMC(peso, altura) {
    let imc;

    imc = peso / (altura * altura);
    return imc;
}

function entrada() {
    console.log('\nINFORME OS DADOS:');
    const idade = parseInt(prompt('Informe a idade: '));
    if (idade < 18 || idade > 65) {
        return false;
    }
    const nome = prompt('Informe o nome: ');
    const peso = parseFloat(prompt('Informe o peso: '));
    const altura = parseFloat(prompt('Informe a altura: '));
    return {nome, idade, peso, altura};
}

function main() {
    if (entrada() === false) {
        console.log('Essa fórmula não pode ser utilizada para menores de idade (-18) e idosos (+65)!\n')
    } else {
        const {nome, idade, peso, altura} = entrada();
        let imc = calcIMC(peso, altura);
        mostrarCondicao(nome, imc);
    }
}

// Chamadas das funções:
main();
