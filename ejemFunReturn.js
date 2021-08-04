//Para que un valor sea dado sin usar console.log

//Función declarativa llamada "sumar" cuyos parametros son a y b
//Contiene una variable. El valor de esta es el resultado de sumar a y b (aún no tienen valor)
function sumar(a,b){
    var resultado = a + b;
    return resultado;
    //return: palabra reservada para regresar valores.

    //En lugar de crear la variable, también se puede pedir que se regrese
    //el resultado de a + b con Return directamente:
    //return a + b;
}

sumar (1,2)
//Al llamar esta función con valores ya dados a los parametros, automaticamente
//regresa el resultado de la operación, que sería 3.
