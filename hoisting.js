//Hoisting: Cuando las variables y funciones se declaran antes de que se procese codigo

//¿Qué sucedería si se pide imprimir el valor de la variable antes de declarar e inicializar la misma?

console.log(nombre);

var nombre = "Lucy";

//La terminal del navegador indica que el valor pedido está indefinido
//Cuando el codigo se esta procesando en el navegador, se lee que hay una variable, pero al no
//encontrar su declaración, lo pone por default como "undefined/indefinido"