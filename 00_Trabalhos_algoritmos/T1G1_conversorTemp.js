// Vitor Hugo Otto

/**
 * Escrever um programa em JavaScript que converta uma temperatura informada pelo usuário em Fahrenheit(°F) para Celsius(°C)
 * A temperatura em graus Celsius(°C) deve ser exibida com uma casa decimal.
 * 
 * A formula para calcular essa conversão é:
 * (tc / 5) = (tf - 32) / 9
 * tc = ((tf - 32) / 9) * 5
 */

const prompt = require(`prompt-sync`)();

let tf = entrada();
converter(tf);

function entrada() {
    let tf = parseInt(prompt('Informe a tempertatura em °F: '));
    return tf;
}

function converter(tf) {
    let tc = ((tf - 32) / 9) * 5;
    console.log(`A temperatura em °C é: ${(tc).toFixed(1)}`);
}

