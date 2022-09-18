const c = el => document.querySelector(el);       //Váriavel para selcionar um elemento.
const cs = el => document.querySelectorAll(el);   //Váriavel para selcionar vários elemento.

let modalQt = 1;    // Variável para setar uma valor padrão a quantidade de pizzas.
let cart = [];      // Variável do carrinho de compras. 
let modalKeyP = 0;   // Variável de identificação da pizza no Modal.


//Preenchimento da tela com as pizzas e do modal para a compra
pizzaJson.map((value, index) => {  
     //Clonando a estrutura
     let pizzaItem = c('.models .pizza-item').cloneNode(true);   

     // Alterando as informações das pizzas
     pizzaItem.setAttribute('data-keyPizza', index);
     pizzaItem.querySelector('.pizza-item--img img').src = value.img;
     pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$: ${value.price.toFixed(2)}`;
     pizzaItem.querySelector('.pizza-item--name').innerHTML = value.name;
     pizzaItem.querySelector('.pizza-item--desc').innerHTML = value.description;
     pizzaItem.querySelector('a').addEventListener('click', (e) => {  
          e.preventDefault();  
             
          let keyPizza = e.target.closest('.pizza-item').getAttribute('data-keyPizza');   // Variável armazenamento do identificador da pizza  
          
          modalQt = 1; 
          modalKeyP = keyPizza;

          c('.pizzaBig img').src = pizzaJson[keyPizza].img;
          c('.pizzaInfo h1').innerHTML = pizzaJson[keyPizza].name;
          c('.pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[keyPizza].description;
          c('.pizzaInfo .pizzaInfo--actualPrice').innerHTML = `R$: ${pizzaJson[keyPizza].price.toFixed(2)}`;
          c('.pizzaInfo--qt').innerHTML = modalQt;

          c('.pizzaInfo--size.selected').classList.remove('selected');
          cs('.pizzaInfo--size').forEach((sizeValue, sizeIndex) => {  
               if(sizeIndex == 2) {
                    sizeValue.classList.add('selected');
               }
               sizeValue.querySelector('span').innerHTML = pizzaJson[keyPizza].sizes[sizeIndex];
          });


          c('.pizzaWindowArea').style.opacity = 0;
          c('.pizzaWindowArea').style.display = 'flex';
          setTimeout(() => {
               c('.pizzaWindowArea').style.opacity = 1;
          }, 150);
     });

     //Adicionar a estrutura na tela com suas informações
     c('.pizza-area').append(pizzaItem);  
});


//Evento de fechar o modal
function closeModal() {
     c('.pizzaWindowArea').style.opacity = 0;
     setTimeout(() => {
          c('.pizzaWindowArea').style.display = 'none';
     }, 500);
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
     item.addEventListener('click', closeModal);
});


//Evento de incrementar e decrementar quantidades de pizzas
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
     if(modalQt > 1) {
          modalQt--;
     c('.pizzaInfo--qt').innerHTML = modalQt;
     }
});
c('.pizzaInfo--qtmais').addEventListener('click', () => {
     modalQt++;
     c('.pizzaInfo--qt').innerHTML = modalQt;
});


//Evento de clique de selecionar tamanhos.
cs('.pizzaInfo--size').forEach((sizeValue, sizeIndex) => {  
     sizeValue.addEventListener('click', () => {
          c('.pizzaInfo--size.selected').classList.remove('selected');
          sizeValue.classList.add('selected');
     });
});


//Evento de adicionar os itens ao carrinho. 
c('.pizzaInfo--addButton').addEventListener('click', () => {
     let tamanhoPizza = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
     let identifier = "ID:"+ pizzaJson[modalKeyP].id + "|" + "TP:" + tamanhoPizza;    // Identificador da pizza e o tamanho da mesma.

     let keyItem = cart.findIndex((item) => item.identifier == identifier);    // Essa variável que armazena os itens do carrinho.
     if (keyItem > -1) {
          cart[keyItem].qt += modalQt;
     }
     else {    // Else será executado primeiro
          cart.push({
               identifier,
               id:pizzaJson[modalKeyP].id,
               tamanhoPizza,
               qt: modalQt
          });
     }
     updateCart();
     closeModal();
});


// Evento de clique do mobile para abrir e fechar
c('.menu-openner').addEventListener('click', () => {
     if (cart.length > 0) {
          c('aside').style.left = '0';
     }
});
c('.menu-closer').addEventListener('click', () => {
     c('aside').style.left = '100vw';
});

//Função de finalizar a compra
function clear() {
     c('.menu-openner span').innerHTML = '0';
}

// Função para preencher o carrinho e mostrar na tela
function updateCart () {
     c('.menu-openner span').innerHTML = cart.length;

     if (cart.length > 0) {
          c('aside').classList.add('show');  
          c('.cart').innerHTML = '';    
          
          let subtotal = 0;
          let desconto = 0;
          let total = 0;

          for(let i in cart) {     
               let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id); // Variável para verificação da mesma pizza
               
               subtotal += pizzaItem.price * cart[i].qt;

               let cartItem = c('.models .cart--item').cloneNode(true);

               cartItem.querySelector('img').src = pizzaItem.img;
               let pizzaSizeName;
               switch(cart[i].tamanhoPizza) {
                    case 0:
                         pizzaSizeName = 'P';
                         break;
                    case 1: 
                         pizzaSizeName = 'M';
                         break;
                    case 2:
                         pizzaSizeName = 'G';
                         break;     
               }
               let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;     // Variável de nome e o tamnho da pizza
               cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
               cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
               cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                    if (cart[i].qt > 1) {
                         cart[i].qt--;
                    }
                    else {
                         cart.splice(i, 1);  
                    }
                    updateCart();  
               });
               cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                    cart[i].qt++;
                    updateCart();
               });

               c('.cart').append(cartItem);
          }

          desconto = (subtotal * 0.05);
          total = (subtotal - desconto);

          c('.subtotal span:last-child').innerHTML = `R$: ${subtotal.toFixed(2)}`;
          c('.desconto span:last-child').innerHTML = `R$: ${desconto.toFixed(2)}`;
          c('.total span:last-child').innerHTML = `R$: ${total.toFixed(2)}`;
          c('.cart--finalizar').addEventListener('click', () => {
               c('aside').classList.remove('show');  
               c('aside').style.left = '100vw';
               clear();
          });
     }
     else {
          c('aside').classList.remove('show');  
          c('aside').style.left = '100vw';
     }
}