let inputcriancas = document.getElementById('criancas');
let inputadultos = document.getElementById('adultos');
let inputduracao = document.getElementById('duracao');
let inputresultado = document.getElementById('result');


onload = function clicar() {
    let btn = document.getElementById('btn');

    btn.addEventListener('click', calcular);
}

function carnePP() {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP() {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function refriPP() {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}


function calcular() {
    let criancas = inputcriancas.value;
    let adultos = inputadultos.value;

    let qcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qcerveja = cervejaPP(duracao) * adultos;
    let qrefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);

    inputresultado.innerHTML = `<p>Você vai precisar de:  </p>`;
    inputresultado.innerHTML += `<p><img src="assets/steak.png">  ${qcarne/1000}kg de carne </p>`;
    inputresultado.innerHTML += `<p><img src="assets/beer.png"> ${Math.ceil(qcerveja/355)} latas de cerveja </p>`;
    inputresultado.innerHTML += `<p><img src="assets/soda.png">  ${qrefri/1000}L de refri </p>`;
}