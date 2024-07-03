// El juego selecciona un numero al azar para que adivines

// * 100 porque MathRandome es de 0 a 1.

let numeroAzar = Math.floor(Math.random() * 100) + 1; 

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;


// Esta accion se ejecuta cuando hago click en chequear

function chequearResultado() {
    intentos++
    intento.textContent = intentos; // esto es la cantidad de intentos que tuvo
    let numeroIngresado = parseInt(numeroEntrada.value) //parseInt porque sino devuelve string

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100';
        mensaje.style.color = 'red'; // le cambio el color a este atributo
        return
    }

    if(numeroIngresado == numeroAzar) {
        mensaje.textContent = 'Felicitaciones! Adivinaste el número!!'
        numeroEntrada.disabled = true;
        mensaje.style.color = 'green';
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'Más alto! El numero ingresado es mayor del que dijiste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Más bajo! El numero ingresado es menor del que dijiste';
        mensaje.style.color = 'red';
    }

}