const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)
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
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)

    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1 //transforma caractere em numero
    } else { 
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    console.log(pecas[peca])

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    } )

}

const robo = document.querySelector('.robo')
const troca = document.querySelector('[data-trocaCor]')
const cor = ['img/Robotron 2000 - Azul.png','img/Robotron 2000 - Amarelo.png','img/Robotron 2000 - Preto.png','img/Robotron 2000 - Vermelho.png','img/Robotron 2000 - Rosa.png','img/Robotron 2000 - Branco.png']
let number = 1

troca.addEventListener("click",(elemento)=>{
    robo.setAttribute('src',cor[number])
    if(number >= cor.length-1){
        number = 0
    }else {
        number++
    }
})

 //O forEach() é muito simples de ser utilizado, toda vez ele é usado temos um elemento e um índice. O elemento é aquilo que foi clicado e o índice é o indíce do array. Então controle.forEach() faz algo.

 //addEventListener é a maneira de registrar uma espera de evento

//target, ou seja, onde o click aconteceu,. Com evento.target ele tras isso.

//Não precisamos ficar entendendo se é somar ou subtrair, podemos simplesmente pegar aquele conteúdo .textContent. Toda vez que é um input é um value e toda vez que é um texto, é um textContent.

//addEventListener - Uma função anônima só pode ser executada uma única vez, quando um gatilho for disparado, nesse caso, quando o evento do click for disparado.

// buscar o controle-contador só do controle, do elemento que foi clicado. Para isso, é preciso passar o elemento como parâmetro para função manipulaDados().

//parentNode porque queremos ir no pai, que é o parent.

//Data-attributes são utilizados para guardar valores em elementos HTML.