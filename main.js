function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

/* PARÂMETRO! Aqui você coloca algo que deve ser passado para o código (idElementoAudio) para que ele funcione 
Isso é chamado de parâmetro e ele é opcional em alguns casos, mas aqui não. */

const ListaDeTeclas = document.querySelectorAll('.tecla');

/* REFERÊNCIA! Aqui você atribui um tipo a referência criada (const nesse caso), e então atribui o código 
para selecionar todas os elementos com a classe "tecla". Torna o código mais limpo, curto e simples */

for (let i = 0; i < ListaDeTeclas.length; i++) {

    const tecla = ListaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;   //template string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}