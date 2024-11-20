
function ParImpar(){
let NumeroValue = document.getElementById("Numero").value;
let resultado;
if(NumeroValue%2==0){
    resultado = "El numero es PAR";
}else{
    resultado = "El numero es IMPAR";
}
let elemenResultadohtml = document.getElementById("resultado");
elemenResultadohtml.textContent = resultado;
}