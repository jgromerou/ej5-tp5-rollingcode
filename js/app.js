let cronometro;
let segundos = 0,
  minutos = 0,
  horas = 0;

let segundosString = '00',
  minutosString = '00',
  horasString = '00';

activarBotones(false, true, true);

let botonIniciar = document.getElementById('botonIniciar');
let botonPausar = document.getElementById('botonPausar');
let botonDetener = document.getElementById('botonDetener');

//addEventListener
botonIniciar.addEventListener('click', init);
botonPausar.addEventListener('click', pausar);
botonDetener.addEventListener('click', detener);

//Funciones
function init() {
  cronometro = setInterval(function () {
    timer();
  }, 1000);
  activarBotones(true, false, false);
}

function timer() {
  segundos++;
  if (segundos === 60) {
    minutos++;
    segundos = 0;
  }
  if (minutos === 60) {
    horas++;
    segundos = 0;
    minutos = 0;
  }

  //formato 00:00:00
  segundos < 10
    ? (segundosString = '0' + segundos)
    : (segundosString = segundos);
  minutos < 10 ? (minutosString = '0' + minutos) : (minutosString = minutos);
  horas < 10 ? (horasString = '0' + horas) : (horasString = horas);

  document.getElementById(
    'time'
  ).innerHTML = `${horasString}:${minutosString}:${segundosString}`;
}

function detener() {
  pausar();
  document.getElementById('time').innerHTML = '00:00:00';
  segundos = 0;
  minutos = 0;
  horas = 0;
  activarBotones(false, true, true);
}

function pausar() {
  clearInterval(cronometro);
  activarBotones(false, true, false);
}

function cambiarColor(color) {
  let section = document.querySelector('.fs-1');
  section.className = 'fs-1 ' + color;
}

let btnAzul = document.querySelector('#botonIniciar'),
  btnVerde = document.querySelector('#botonPausar'),
  btnFucsia = document.querySelector('#botonDetener');

btnAzul.addEventListener('click', () => cambiarColor('textoAzul'));
btnVerde.addEventListener('click', () => cambiarColor('textoVerde'));
btnFucsia.addEventListener('click', () => cambiarColor('textoFucsia'));

function activarBotones(estadoIniciar, estadoPausar, estadoDetener) {
  document.getElementById('botonIniciar').disabled = estadoIniciar;
  document.getElementById('botonPausar').disabled = estadoPausar;
  document.getElementById('botonDetener').disabled = estadoDetener;
}
