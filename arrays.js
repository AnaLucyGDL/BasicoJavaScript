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
                       //push añade/inserta elementos al array
var masFrutas = frutas.push("Uvas");
console.log (frutas);
//Se mostraran los primeros 4 elementos, y se le agregará el quinto recién agregado (Uvas), mostrando
//que ahora hay 5 elementos en total.
console.log (frutas[0]);//para acceder al elemento "Uvas"

                       //pop elimina elementos del array
var ultimo = frutas.pop("Uvas");
console.log (frutas);
//Muestra los elementos del array, habiendose eliminado "Uvas", y quedando solo 4 elementos de nuevo
