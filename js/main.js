const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const avatar = document.querySelector('#robotron');
const cores = [
    "Amarelo","Vermelho","Rosa","Preto","Branco","Azul"
]
let contador = 0;
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        atualizaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);
    });
})


function atualizaDados(operacao, controle, peca){
    const alvo = controle.querySelector('[data-contador]');
    if(operacao === '-' && alvo.value > 0){
        console.log(alvo.value)
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
    
        })
    } else if (operacao === '+') {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    
        })
    }
    
    
    if(operacao === '-'){
        alvo.value = parseInt(alvo.value) - 1;
        if(alvo.value  <= 0){
            alvo.value = 0;
        }
    } else {
        alvo.value = parseInt(alvo.value) + 1;    
    } 
}

function mudaCor(){
    avatar.src = "img/" + cores[contador] + ".png";
    contador += 1;
    if (contador == 6){
        contador = 0;
    }
}

alert('Altere a cor do chassi clicando no Robotron.')
