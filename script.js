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

        nomeTitulo.innerText = 'LULA';
        nomeCandidato.innerHTML = 'Nome: <b>LUIS INÁCIO LULA DA SILVA</b>';
        partido.innerHTML = 'Partido: <b>PT</b>';
        foto.style.backgroundImage = "url('./images/lula.jpg')";
        legenda.style.display = 'flex';
    }

    else if (num1.value == '1' && num2.value == '7') {

        nomeTitulo.innerText = 'BOLSONARO';
        nomeCandidato.innerHTML = 'Nome: <b>JAIR MESSIAS BOLSONARO</b>';
        partido.innerHTML = 'Partido: <b>PSL</b>';
        foto.style.backgroundImage = "url('./images/bolsonaro.jpg')";
        legenda.style.display = 'flex';
    }
    
    else if (num1.value == '1' && num2.value == '2') {

        nomeTitulo.innerText = 'CIRO GOMES';
        nomeCandidato.innerHTML = 'Nome: <b>CIRO FERREIRA GOMES</b>';
        partido.innerHTML = 'Partido: <b>PDT</b>';
        foto.style.backgroundImage = "url('./images/ciro.jpg')";
        legenda.style.display = 'flex';
    }

    else if (num1.value == '1' && num2.value == '5') {

        nomeTitulo.innerText = 'SERGIO MORO';
        nomeCandidato.innerHTML = 'Nome: <b>SERGIO FERNANDO MORO</b>';
        partido.innerHTML = 'Partido: <b>NOVO</b>';
        foto.style.backgroundImage = "url('./images/moro.jpg')";
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
        }else{
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