let cronometro;
let segundos = 0,
  minutos = 0,
  horas = 0;

let segundosString = '00',
  minutosString = '00',
  horasString = '00';

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
}

function pausar() {
  clearInterval(cronometro);
}

function cambiarColor(color) {
  let section = document.querySelector('.fs-1');
  console.log(section);
  section.className = 'fs-1 ' + color;
}

let btnAzul = document.querySelector('#botonIniciar'),
  btnVerde = document.querySelector('#botonPausar'),
  btnFucsia = document.querySelector('#botonDetener');

console.log(btnAzul);

btnAzul.addEventListener('click', () => cambiarColor('textoAzul'));
btnVerde.addEventListener('click', () => cambiarColor('textoVerde'));
btnFucsia.addEventListener('click', () => cambiarColor('textoFucsia'));
