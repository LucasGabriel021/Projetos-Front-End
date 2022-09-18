//Variáveis de manipulação.
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0; //Variável de inicio da primeira etapa, indice 0.
let numeroTela = '';    //Variável de preenchimento de números da tela.
let votoBranco = false  //Variável referente ao voto em branco.
let votos = [];     //Variável de votos.

//Função de limpar tela e preencher os números na tela.
function comecarEtapa() {
     let etapaVoto = etapas[etapaAtual];    //Variável de acesso ao script etapa.
     let numeroHtml = '';     //Variável para montar os números no HTML
     numeroTela = '';
     votoBranco = false;

     for(let count = 0; count < etapaVoto.numeros; count++) {
          if(count == 0) {
               numeroHtml += '<div class="numero pisca"></div>';
          }
          else {
               numeroHtml += '<div class="numero"></div>';
          }
     }

     seuVotoPara.style.display = 'none';
     cargo.innerHTML = etapaVoto.titulo;
     descricao.innerHTML = '';
     aviso.style.display = 'none';
     lateral.innerHTML = '';
     numeros.innerHTML = numeroHtml;
}

//Função que atualiza a inteface.
function atualizaInterface() {
     let etapaVoto = etapas[etapaAtual];
     let candidato = etapaVoto.candidatos.filter((item, index) => {
          if(item.numero == numeroTela) {
               return true;
          }
          else {
               return false;
          }
     }); 

     if(candidato.length > 0){
          candidato = candidato[0];
          seuVotoPara.style.display = 'block';
          descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`;
          aviso.style.display = 'block';

          let imgHtml = '';   //Variável de montar a s imagens na tela
          for(let i in candidato.fotos) {
               if(candidato.fotos[i].small) {
                    imgHtml += `<div class="d-1-image small"><img src="assets/img/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
               }
               else {
                    imgHtml += `<div class="d-1-image"><img src="assets/img/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
               }
          }
          lateral.innerHTML = imgHtml;
     }
     else {
          seuVotoPara.style.display = 'block';
          aviso.style.display = 'block';
          descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
     }
     console.log(candidato);
}

//Função de clique dos números
function clicou(n) {
     let itemNumero = document.querySelector('.numero.pisca');   //Variável que vereifica se tem algo com a classe pisca

     if(itemNumero != null) {   // Verificação para ver se tem algum item piscando.
          itemNumero.innerHTML = n;
          numeroTela = `${numeroTela}${n}`;     
     
          itemNumero.classList.remove('pisca');
          if(itemNumero.nextElementSibling != null) {  
               itemNumero.nextElementSibling.classList.add('pisca');
          }
          else {
               atualizaInterface();
          }
     }
}

//Função do botão de voto branco
function branco() {
     if(numeroTela == '') {
          votoBranco = true;
          seuVotoPara.style.display = 'block';
          aviso.style.display = 'block';
          numeros.innerHTML = '';
          descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
     }
     else {
          alert('Para votar em BRANCO, não informe nenhum número!')
     }
}

//Função do botão de corrige
function corrige() {
     comecarEtapa();
}

//Função confirmar
function confirma() {
     let etapaVoto = etapas[etapaAtual];
     let votoConfirmado = false;

     if(votoBranco == true) {
          votoConfirmado = true;
          votos.push({
               cargo: etapas[etapaAtual].titulo,
               voto: 'Branco'
          });
     }
     else if(numeroTela.length == etapaVoto.numeros) {
          votoConfirmado = true;
          votos.push({
               cargo: etapas[etapaAtual].titulo,
               voto: numeroTela
          });
     }

     if(votoConfirmado) {
          etapaAtual++;
          if(etapas[etapaAtual] != undefined) {
               comecarEtapa();
          }
          else {
               document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>'
               console.log(votos);
          }
     }
}

comecarEtapa();