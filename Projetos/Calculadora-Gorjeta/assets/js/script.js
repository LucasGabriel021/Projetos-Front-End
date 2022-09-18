const valorInput = document.querySelector('#vtotal');
const totalInput = document.querySelector('#npessoas');
let telaGorjeta = document.querySelector('#tela-gorjeta');
let telaTotal = document.querySelector('#tela-total');


let textoBotao = document.querySelector('#botao-input');
textoBotao.addEventListener('keyup', () => {
     let valorTextoBotao = textoBotao.value;
     console.log(valorTextoBotao);

});

function calcularGorjeta(n) {
     if(valorInput.value != '' && totalInput.value != '') {
          let campo1 = valorInput.value;
          let vGorjetaPessoa = (n / 100) * campo1;
          telaGorjeta.innerHTML = `R$: ${vGorjetaPessoa.toFixed(2)}`;
          console.log(vGorjetaPessoa);

          let campo2 = totalInput.value;
          let vGorjetaTotal = (campo2 * vGorjetaPessoa);
          telaTotal.innerHTML = `R$: ${vGorjetaTotal.toFixed(2)}`;
          console.log(vGorjetaTotal);

          document.querySelector('#botao-redefinir').classList.add('botao-redefinir-hoever');
          document.querySelector('spam.botao-erro').style.display = 'none';
     }
     else {
          document.querySelector('spam.botao-erro').style.display = 'inline';
     }  
}

function botaoRedefinir() {
     telaGorjeta.innerHTML = 'R$: 0.00';
     telaTotal.innerHTML = 'R$: 0.00';
     valorInput.value = '';
     totalInput.value = '';
     document.querySelector('spam.botao-erro').style.display = 'none';
}

function valorGorjeta() {

}

function total() {

}