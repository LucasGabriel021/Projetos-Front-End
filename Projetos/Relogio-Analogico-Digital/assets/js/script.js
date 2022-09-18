let digitalElemento = document.querySelector('.digital');
let ponteiroS = document.querySelector('.p_s');
let ponteiroM = document.querySelector('.p_m');
let ponteiroH = document.querySelector('.p_h');

function updateRelogio() {
     let data = new Date();
     let hora = data.getHours();
     let minuto = data.getMinutes();
     let segundos = data.getSeconds();

     digitalElemento.innerHTML = `${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundos)}`;

     let segundosDeg = ((360 / 60)  * segundos) - 90;
     let minutosDeg = ((360 / 60)  * minuto) - 90;
     let horasDeg = ((360 / 12)  * hora) - 90;

     ponteiroS.style.transform = `rotate(${segundosDeg}deg)`;
     ponteiroM.style.transform = `rotate(${minutosDeg}deg)`;
     ponteiroH.style.transform = `rotate(${horasDeg}deg)`;
}

function fixZero(horas) {
     return horas < 10 ? `0${horas}` : horas;
}

updateRelogio();
setInterval(updateRelogio, 1000);