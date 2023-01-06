const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
//console.log(estatisticas);


/**
 * Objeto de estatisticas!
 */
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

controle.forEach(function(item, index) {
    //console.log(item);
    item.addEventListener("click", function(e) {
        //console.log(e.target.textContent);
        //console.log(e.target.parentNode);
        //console.log(e);
        manipulaDados(e.target.dataset.controle, e.target.parentNode); // TextContent propriedade que irá obter o valor do nó
        atualizaEstatistica(e.target.dataset.peca);
        //console.log(e.target.dataset.peca);
    })
});

/*
adicionar.addEventListener("click", () => manipulaDados("soma"));

subtrair.addEventListener("click", () => manipulaDados("tira"));
*/

function manipulaDados(operacao, controle) {
    const custom = controle.querySelector("[data-contador]");
    if(operacao === "+") {
        custom.value = parseInt(custom.value) + 1;
    } else if (operacao === "-") {
        custom.value = parseInt(custom.value) - 1;
    }
}

function atualizaEstatistica(peca) {
    console.log(pecas[peca]);
    estatisticas.forEach((item, index) => {
        //console.log(item.dataset.estatistica);
        //console.log(item.textContent);
        item.textContent = parseInt(item.textContent) + pecas[peca][item.dataset.estatistica];
    });
}

/*
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
let posicao = lista.indexOf("Vermelho");
console.log("Posição do vermelho: "+posicao);
if(posicao === 1) {
    lista.splice(1, 1);
}
console.log(lista);
*/
