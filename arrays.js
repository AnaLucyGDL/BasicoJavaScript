//Estructura de datos y tipo objeto. Valor que va a guardar más valores adentro 
//(numeros, strings, objetos)

var fruras = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log (frutas);
//Regresa los 4 elementos del array

//Para saber que un array tiene elementos en su interior si no se conoce
console.log (frutas.length);
//La consola regresara que hay 4 elementos dentro

//Para acceder a cada elemento del array
console.log (frutas[0]); //en programación, las cuentas inician desde 0
//Al introducir lo anterior en la consola del navegador, regresara "Manzana" al ser el elemento
//en la posición señalada (0) del index, si se introduce 1, se mostrará "Plátano", y así sucesivamente.

//Para mutar el array (realizar cambios con metodos)
                       //metodo push añade/inserta elementos al array
var masFrutas = frutas.push("Uvas");
console.log (frutas);
//Se mostraran los primeros 4 elementos, y se le agregará el quinto recién agregado (Uvas), mostrando
//que ahora hay 5 elementos en total.
console.log (frutas[0]);//para acceder al elemento "Uvas"

                       //metodo pop elimina elementos del array
var ultimo = frutas.pop("Uvas");
console.log (frutas);
//Muestra los elementos del array, habiendose eliminado "Uvas", y quedando solo 4 elementos de nuevo

//Agregar un nuevo elemento al array, pero en lugar de que vaya al final, se inserta al inicio
var nuevaLongitud =  frutas.unshift("Uvas");
console.log (frutas);
//Se muestran 5 elementos de nuevo, pero esta vez "Uvas" está al inicio, no al final como al usar push

//Eliminar el primer elemento de la lista
var borrarFruta = frutas.shift("Uvas");
console.log (frutas);

//Mutar array
var posicion = frutas.indexOf("Cereza") //Nos mostrará la posición en que está el elemento "Cereza"
posicion//en consola

frutas[2]; //manda a llamar el elemento en tal posición del index directamente
//* Nota: Al numero ([0] [1] etc) se le llama Index