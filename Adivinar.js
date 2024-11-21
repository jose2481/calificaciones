
function adivinarNumero(max, min) {

let NumeroGenerado = Math.floor(Math.random()*(max-min +1))+min;
console.log(NumeroGenerado);
console,console.log(NumeroGenerado);
let numeroLeido = document.getElementById("numero").value;
let iguales = NumeroGenerado==numeroLeido;
if(iguales){
resultado = " ¡ Felicidades Adivinaste El Numero Ganador ! ";
}
else{
    resultado = `Lo Siento, sigue intentando - El numero es ${NumeroGenerado} !`;
}
let elemenResultadohtml = document.getElementById("resultado");
elemenResultadohtml.textContent = resultado;
}