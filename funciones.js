//Declarativas
//•Al usarse una palabra reservada "function" se está declarando
//•Con el nombre de la función se reserva un espacio en memoria para... 
//guardar el calculo o la operación que se hace dentro de la función.
function miFunción(){
    return 3;
}

//Para llamar una función declarativa
miFunción();


//De expresión
//•Las variables pueden guardar varios tipos de valores, incluso funciones.
//•Una función necesita parametros "()"
//•Ponemos los parametros que se esperan recibir como valor cuando se llame 
//la función para que esta pueda hacer algo
var miFunción = function (a,b){
    return a + b; 
    //a y b serían el valor de dos variables que llamamos desde fuera de la función.
}
//Para llamar una función expresiva se usa el nombre de la variable que
//se le dio, y al poner parentesis se trata como una función.
miFunción();