let paragrafo = document.querySelector('.menu-pcl-a-2 .description');
let imagem = document.querySelector('.menu-pcl--area-right');
let button1 = document.querySelector('.menu-pcl--conteudo .box1');
let button2 = document.querySelector('.menu-pcl--conteudo .box2');
let button3 = document.querySelector('.menu-pcl--conteudo .box3');
let button4 = document.querySelector('.menu-pcl--conteudo .box4');


function trocar(n) {
     if(n == '1') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-1.png)';
          if(button1.classList.contains('btn-selected') == false){
               clear();

               layout1 = '';
               layout1 += `<p>${info[0].p1}</p>`;
               layout1 += `<p>${info[0].p2}</p>`;
          
               button1.classList.add('btn-selected');
               paragrafo.innerHTML = layout1;
          }
     }
     else if(n == '2') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-2.png)';
          if(button2.classList.contains('btn-selected') == false){
               clear();
               
               layout2 = '';
                    layout2 += `<p>${info[1].p1}</p>`;
                    layout2 += `<p>${info[1].p2}</p>`;
               
               button2.classList.add('btn-selected');
               paragrafo.innerHTML = layout2;
          }
     }
     else if(n == '3') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-3.png)';
          if(button3.classList.contains('btn-selected') == false){
               clear();

               layout3 = '';
               layout3 += `<p>${info[2].p1}</p>`;
               layout3 += `<p>${info[2].p2}</p>`;
               layout3 += `<p>${info[2].p3}</p>`;
          
               button3.classList.add('btn-selected');
               paragrafo.innerHTML = layout3;
          }
     }
     else if(n == '4') {
          imagem.style.backgroundImage = 'url(assets/img/ilustracao-4.png)';
          if(button4.classList.contains('btn-selected') == false){
               clear();

               layout4 = '';
               layout4 += `<p>${info[3].p1}</p>`;
               layout4 += `<p>${info[3].p2}</p>`;
               layout4 += `<p>${info[3].p3}</p>`;

               button4.classList.add('btn-selected');
               paragrafo.innerHTML = layout4;
          }
     }
}

function clear() {
     button1.classList.remove('btn-selected');
     button2.classList.remove('btn-selected');
     button3.classList.remove('btn-selected');
     button4.classList.remove('btn-selected');
}

const qtBox = document.querySelectorALL('.slides .box-slider');
let etapa = 0;
let slideAtual = document.getElementById('slide-atual');

function slide() {
     
}