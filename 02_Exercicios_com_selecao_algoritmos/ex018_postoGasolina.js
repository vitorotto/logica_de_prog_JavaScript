// Vitor Hugo Otto

/** 
 
 Um posto está vendendo combustiveis conforme os criterios de descontos abaixo. Escrever um programa que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina, D-diesel). Calcular e imprimir o valor a ser pago pelo cliente sabendo-se que os preços normais são: gasolina - R$6,89 / alcool - R$5,87 / diesel - R$6,45.

 a) Álcool:
    * até 20 litros, desconto de 3% por litro;
    * a partir de 20 litros, desconto de 5% por litro.
 b) Gasolina:
    * até 20 litros, desconto de 4% por litro;
    * a partir de 20 litros, desconto de 6% por litro.
 c) Diesel:
    * até 20 litros, desconto de 5% por litro;
    * a partir de 20 litros, desconto de 7% por litro.
 
*/

const prompt = require(`prompt-sync`)();

let {l,c} = entrada();
let valorLitro = calcularDesconto(l,c);
saida();

function entrada() {
    console.log('\nINSIRA AS INFORMAÇÕES');
    let l = parseFloat(prompt('Informe a quantidade de litros vendidos: '));
    while (isNaN(l)) {
        console.log('Valor inválido! Digite novamente.');
        l = parseFloat(prompt('Informe a quantidade de litros vendidos: '));
    };
    let c = prompt('Informe o tipo de combustível: (A - Álcool, G - Gasolina, D - Diesel)').toUpperCase();
    while (c !== 'A' && c !== 'G' && c !== 'D') {
        console.log('Valor inválido! Digite novamente.');
        c = prompt('Informe o tipo de combustível: (A - Álcool, G - Gasolina, D - Diesel)').toUpperCase();
    };
    return {l,c};
};

function calcularDesconto(l,c) {

    // Preco de cada combustível
    const precoAlc = 5.87;
    const precoGas = 6.89;
    const precoDis = 6.45;

    if (c === 'A') { // Preço final do Álcool
        if (l <= 20) {
            let valorLitro = precoAlc - (precoAlc * (3/100));
            return valorLitro;
        } else {
            let valorLitro = precoAlc - (precoAlc * (5/100));
            return valorLitro;
        };
    } else if (c === 'G') { // Preço final da gasolina
        if (l <= 20) {
            let valorLitro = precoGas - (precoGas * (4/100));
            return valorLitro;
        } else {
            let valorLitro = precoGas - (precoGas * (6/100));
            return valorLitro;
        };
    } else { // Preço final do Diesel
        if (l <= 20) { 
            let valorLitro = precoDis - (precoDis * (3/100));
            return valorLitro;
        } else {
            let valorLitro = precoDis - (precoDis * (5/100));
            return valorLitro;
        };
    };
};

function saida() {
    console.log('\nRESULTADO: ');
    console.log('Valor por litro: R$' + valorLitro);
    console.log('Total a pagar: R$' + (valorLitro * l).toFixed(2) + '\n');
};