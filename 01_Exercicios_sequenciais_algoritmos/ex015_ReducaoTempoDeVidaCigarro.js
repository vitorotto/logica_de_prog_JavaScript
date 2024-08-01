/* Escrever um programa para calcular a redução do tempo de vida de um fumante. Perguntar a quantidade de cigarros fumados por dia e quantos anos ele já fumou. Considerar que um fumante perde 10 minutos de vida da cada cigarro, calcular quantos dias de vida um fumante perderá. Exibir o total em dias com apenas duas casas decimais */

const prompt = require('prompt-sync')();

const cigDia = prompt('Quantos cigarros você fuma por dia? ');
const anos = prompt('Informe por quantos anos da sua vida você já fumou: ');

// calculo
var minutosPerdidosPorDia = cigDia * 10; 
var totalMinutosPerdidos = (minutosPerdidosPorDia * 365 * anos); 

console.log(`Perderá ${((totalMinutosPerdidos  / 60) / 24).toFixed(2)} dias de vida`);
