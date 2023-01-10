const formulario = document.getElementById("novoItem");
// console.log(formulario);
const lista = document.getElementById("lista");
const items = JSON.parse(localStorage.getItem("items")) || []; // Verifica se há dados salvos no armazenamento

items.forEach(element => {
     //console.log(element);
     criaElemento(element);
});

formulario.addEventListener("submit", (e) => {
     e.preventDefault();
     // console.log("Guardando dados!");
     // console.log(e);
     // console.log(e.target.elements['nome'].value); // Pegar valor através do name

     const nome = e.target.elements['nome'];
     const quantidade = e.target.elements['quantidade']

     const itemAtual = { // Objeto que será transformado em um JSON com informações
          nome: nome.value,
          quantidade: quantidade.value
     }

     criaElemento(itemAtual);

     items.push(itemAtual);
     
     localStorage.setItem("items", JSON.stringify(items));

     nome.value = "";
     quantidade.value = "";
});

function criaElemento(item) {
     // <li class="item"><strong>7</strong>Camisas</li> => Exemplo de como deve ser cirado a lista.
     // console.log("Nome: "+nome+" | "+"Quantiddae: "+qtd);

     const novoItem = document.createElement("li"); // Criar Lista
     novoItem.classList.add("item"); // Adicionar Classe
     // console.log(novoItem);

     let numero = document.createElement("strong");
     numero.innerHTML = item.quantidade;
     // console.log(numero);

     novoItem.appendChild(numero) // Adicionar tag strong
     novoItem.innerHTML += item.nome; // Adicionar o nome

     lista.appendChild(novoItem); // Adicionar item na lista

}