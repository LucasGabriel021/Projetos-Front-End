let identificador = document.querySelector(".id-adivice");
let areaTexto = document.querySelector('.text-caixa');

async function loadFrases() {
     const requisicaoApi = await fetch('https://api.adviceslip.com/advice');
     let json = await requisicaoApi.json();
     imprimirFrase(json);
}

function imprimirFrase(item) {
     let id = item.slip.id;
     let frase = item.slip.advice;
     
     identificador.innerHTML = `Conselho N° ${id}`;
     areaTexto.innerHTML = `"${frase}"`;
}

/**/