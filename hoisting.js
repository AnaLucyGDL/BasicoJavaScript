//Hoisting: Cuando las variables y funciones se declaran antes de que se procese codigo

//¿Qué sucedería si se pide imprimir el valor de la variable antes de declarar e inicializar la misma?

console.log(nombre);
var nombre = "Lucy";

//La terminal del navegador indica que el valor pedido está indefinido
//Cuando el codigo se esta procesando en el navegador, se lee que hay una variable, pero al no
//encontrar su declaración, lo pone por default como "undefined/indefinido"

//Se llama una función antes de que la creemos, y dentro de esta se pide que la consola imprima
//un saludo junto al valor de una variable que es declarada despúes fuera de la propia función

hey();
function hey(){
    console.log("Hola " + nombre);
}
var nombre = "Lucy";

//Al hacerse la prueba en la terminal del navegador, la función se ejecuta correctamente, pero
//el valor se muestra como indefinido de nuevo.