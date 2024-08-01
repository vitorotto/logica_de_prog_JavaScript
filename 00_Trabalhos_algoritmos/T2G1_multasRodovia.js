// Vitor Hugo Otto

/**
 * Escrever um programa que informe a placa de um carro e a 
 * velocidade medida pelo radar da polícia rodoviária. Sabe-se 
 * que na rodovia o limite de velocidade é de 80Km/h.
 * 
 * No final exibir uma mensagem informando a placa do carro e 
 * se ele foi multado ou não. Caso ele tenha sido multado, 
 * informar a velocidade medida e o valor da multa a ser paga 
 * (com duas casas decimais).
 * 
 * A multa por excesso de velocidade é calculada da seguinte forma:
 * 
 *    ► caso a velocidade do carro medida seja menor ou igual a 20% 
 *      acima do limite permitido, então a multa é calculada cobrando
 *      um valor fixo de R$50,00 mais R$8,25 por cada Km/h acima do 
 *      limite.
 *    
 *    ► caso a velocidade medida do carro seja superior a 20% do 
 *      limite permitido, então a multa a ser cobrada é um valor
 *      fixo de R$100,00 mais R$12,50 por cada Km/h acima do limite.
 */

const prompt = require(`prompt-sync`)();

const{lim, placa, vel} = entrada();
const valor = calcMulta(lim, vel);
saida(valor, placa, vel);

function entrada() {
    console.log('\nINSIRA AS INFORMAÇÕES:');
    let lim = parseInt(prompt('Informe o limite da rodovia: '));
    let placa = prompt('Informe a placa do veiculo: (ABC1234) ');
    let vel = parseInt(prompt('Informe a velocidade do veículo: '));
    return {lim, placa, vel};
}

function calcMulta(lim, vel) {
    let valor;

    if (vel <= lim) {
        valor = false;
    } else if (vel <= (lim + (lim * 0.2))) {
        valor = 50 + ((vel - lim) * 8.25);
    } else {
        valor = 100 + ((vel - lim) * 12.5);
    }
    return valor;
}

function saida(valor, placa, vel) {
    if (valor === false) {
        console.log(`\nO veiculo [${placa}] não foi multado.\n`);
    } else {
        console.log(`\nO veiculo [${placa}] estava a ${vel}Km/h e foi multado em R$${(valor).toFixed(2)}.\n`);
    }
}