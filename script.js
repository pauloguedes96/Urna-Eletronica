//Função que será adicionada em todos os elementos da
//classe .btn
document.querySelectorAll('.btn').forEach((botao) => {

    document.getElementById(botao.id).addEventListener('click', () => {

        console.log(botao.value);
        votacao(botao);
    });
});

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let somNumeros = document.getElementById('somNumeros');
let somConfirma = document.getElementById('somConfirma');

function votacao(botao) {

    //console.log('Entrou na funcao votacao')

    if (!num1.value) {
        num1.innerHTML = botao.value;
        num1.value = botao.value;
        somNumeros.play();
        return
    }
    else if (!num2.value) {
        num2.innerHTML = botao.value;
        num2.value = botao.value;
        somNumeros.play();
        mostraCandidato();
    }

    //console.log('Saiu da funcao votacao');
}

let nomeTitulo = document.getElementById('nomeTitle');
let nomeCandidato = document.getElementById('nomeCandidato');
let partido = document.getElementById('partidoCandidato');
let foto = document.getElementById('fotoPresidente');
let legenda = document.getElementById('legenda');


function mostraCandidato() {

    if (num1.value == '1' && num2.value == '3') {

        nomeTitulo.innerText = candidato.lula.nome;
        nomeCandidato.innerHTML = `Nome: <b>${candidato.lula.nomeCompleto}</b>`;
        partido.innerHTML = `Partido: <b>${candidato.lula.partido}</b>`;
        foto.style.backgroundImage = candidato.lula.foto;
        legenda.style.display = 'flex';
    }

    else if (num1.value == '1' && num2.value == '7') {

        nomeTitulo.innerText = candidato.bolsonaro.nome;
        nomeCandidato.innerHTML = `Nome: <b>${candidato.bolsonaro.nomeCompleto}</b>`;
        partido.innerHTML = `Partido: <b>${candidato.bolsonaro.partido}</b>`;
        foto.style.backgroundImage = candidato.bolsonaro.foto;
        legenda.style.display = 'flex';
    }

    else if (num1.value == '1' && num2.value == '2') {

        nomeTitulo.innerText = candidato.ciro.nome;
        nomeCandidato.innerHTML = `Nome: <b>${candidato.ciro.nomeCompleto}</b>`;
        partido.innerHTML = `Partido: <b>${candidato.ciro.partido}</b>`;
        foto.style.backgroundImage = candidato.ciro.foto;
        legenda.style.display = 'flex';
    }

    else if (num1.value == '1' && num2.value == '5') {

        nomeTitulo.innerText = candidato.moro.nome;
        nomeCandidato.innerHTML = `Nome: <b>${candidato.moro.nomeCompleto}</b>`;
        partido.innerHTML = `Partido: <b>${candidato.moro.partido}</b>`;
        foto.style.backgroundImage = candidato.moro.foto;
        legenda.style.display = 'flex';
    }

    else {
        nomeTitulo.innerText = 'INVALIDO';
        nomeCandidato.innerText = 'INVALIDO';
        partido.innerText = 'INVALIDO';
        foto.style.backgroundImage = "url('./images/person-icon.png')";
        legenda.style.display = 'none';
        num1.value = null;
        num2.value = null;
        console.log('CANDIDADO INVALIDO')
    }
}

document.getElementById('btnConfirma').addEventListener('click', confirma);


function confirma() {

    if (document.getElementById('fim').style.display == 'flex') {

        corrige();
        console.log('caiu aqui')
    } else {

        if (num1.value != null && num2.value != null) {

            document.getElementById('fim').style.display = 'flex';
            somConfirma.play()
        } else {
            console.log('INVALIDO')
        }
    }
}

document.getElementById('btnCorrige').addEventListener('click', corrige);

function corrige() {
    nomeTitulo.innerText = 'CANDIDATO';
    nomeCandidato.innerText = 'Nome:';
    partido.innerText = 'Partido:';
    num1.innerText = '';
    num2.innerText = '';
    num1.value = null;
    num2.value = null;
    somNumeros.play();
    foto.style.backgroundImage = "url('./images/person-icon.png')";
    legenda.style.display = 'none';
    document.getElementById('fim').style.display = 'none';
}

document.getElementById('btnBranco').addEventListener('click', votoBranco);

function votoBranco() {
    nomeTitulo.innerText = 'VOTAR EM BRANCO';
    nomeCandidato.innerText = '';
    partido.innerText = '';
    num1.innerText = '0';
    num2.innerText = '0';
    num1.value = '0';
    num2.value = '0';
    somNumeros.play();
    foto.style.backgroundImage = "url('./images/person-icon.png')";
    legenda.style.display = 'none';
}

let candidato = {

    lula: {
        nome: 'LULA',
        nomeCompleto: 'LUIS INÁCIO LULA DA SILVA',
        partido: 'PT',
        foto: "url('./images/lula.jpg')",
    },

    bolsonaro: {
        nome: 'BOLSONARO',
        nomeCompleto: 'JAIR MESSIAS BOLSONARO',
        partido: 'PSL',
        foto: "url('./images/bolsonaro.jpg')",
    },

    ciro: {
        nome: 'CIRO GOMES',
        nomeCompleto: 'CIRO FERREIRA GOMES',
        partido: 'PDT',
        foto: "url('./images/ciro.jpg')",
    },

    moro: {
        nome: 'SERGIO MORO',
        nomeCompleto: 'SERGIO FERNANDO MORO',
        partido: 'NOVO',
        foto: "url('./images/moro.jpg')",
    },
}