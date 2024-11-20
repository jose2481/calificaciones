
let calificacion = parseInt(prompt("registre una calificacion entre 0 y 100: "));
let mensaje;
if(calificacion<0 || calificacion>100 || isNaN(calificacion)){
    mensaje = "La calificacion no es valida, debe ser entre 0 y 100.";
}
else{
if (calificacion>=90){
    mensaje = "aprobado con honores";

}
else if (calificacion>=70) {
        mensaje = "aprobado";
    }
    else {
        mensaje = "reprobado";
    }
}