// Vitor Hugo Otto
/* Escrever um programa que leia o tempo inicial e final de um a partida de tênis no formato hor:min:seg e informe o tempo de duração da mesma no formato hor:min:seg */

const prompt = require(`prompt-sync`)();

duracao();

function duracao() {
    console.log('Informe o horário de início da partida: ');
    let horInicio = parseInt(prompt('Hora: '));
    let minInicio = parseInt(prompt('Min: '));
    let segInicio = parseInt(prompt('Seg: '));

    console.log('Informe o horário de termino da partida: ');
    let horFinal = parseInt(prompt('Hora: '));
    let minFinal = parseInt(prompt('Min: '));
    let segFinal = parseInt(prompt('Seg: '));

    // Convertendo tudo para segundos
    inicio = (horInicio * 3600) + (minInicio * 60) + segInicio;
    final = (horFinal * 3600) + (minFinal * 60) + segFinal;

    // subtraindo os valores
    let dur = final - inicio;

    // convertendo para formato hor:min:seg
    horDur = (dur / 3600).toFixed(0);
    minDur = ((dur % 3600) / 60).toFixed(0);
    segDur = ((dur % 3600) % 60).toFixed(0);

    return console.log(`${horDur}:${minDur}:${segDur}`);
};