function tocaSom(idAudio) {
     const seletorSom = document.querySelector(idAudio);
     if(seletorSom && seletorSom.localName === "audio") {
          seletorSom.play();
     } else {
          //alert("Seletor não encontardo!");
          console.log("Seletor não foi encontrado ou possui valor invalido!");
     }
}

const listaTeclas = document.querySelectorAll(".tecla");
//console.log(listaTeclas);

for(let contador = 0; contador < listaTeclas.length; contador++) {
     const tecla = listaTeclas[contador];
     //console.log(tecla);
     //console.log(tecla.classList[1]);
     const teclaId = tecla.classList[1];
     //console.log(teclaId);

     const templateId = `#som_${teclaId}`;

     tecla.onclick = function() { // Função anônima evita o erro
          tocaSom(templateId);
     };

     tecla.onkeyup = function(e) {
          //console.log(e.code);
          if(e.code === "Enter" || e.code === "Space") {
               tecla.classList.add("ativa");
          }
     };

     tecla.onkeyup = function() {
          tecla.classList.remove("ativa");
     }
}