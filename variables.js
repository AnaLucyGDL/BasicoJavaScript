//¿Qué es una variable? Guardar valores en memoria. 
//Representación de algún lugar en memoria reservado para un valor.

//Variable llamada "nombre" con el valor "Lucy" que puede ser llamada al ser necesitada
var nombre = "Lucy";

//Declarar. Después se le dará un valor.
var edad;

edad //Indefinida. Espacio reservado sin valor, aún.

//Inicializar. Ya fue declarada, ahora se le da un valor, y ya se puede utilizar.
edad = 20;

edad //Ya inicializada/Definida. Valor numerico.

//Variables complejas. 
//Variables de arrays (conjuntos de elementos)
var elementos = ["Computadora","Celular"];
//"Elementos" es el espacio designado en memoria, tiene valores string/cadena de caracteres.
//[] para valores string.
//Simbolo "=" para inicializar

//Variable tipo "objeto"
//Objeto/Variable compleja porque guarda más valores de diferentes tipos
var persona = {
    nombre : "Lucy", //coma para separar 
    edad : 20
}

//Para mandar llamar al objeto con sus valores ya establecidos:
persona;