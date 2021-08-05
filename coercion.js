//Coerción: Forma en que se puede cambiar un tipo de valor a otro
//Coerciones implicitas: Cuando el lenguaje ayuda y cambia un tipo de valor a otro
//Coerciones explicitas: Forma en que obligamos que un valor de un tipo cambie a otro

4 + "7"; //47
4 * "7"; //28
2 + true; //3
false - 3; //-3

//Implicitas
//En terminal de navegador:
var a = 4 + "7";
typeof a
//a muestra que contiene un valor "string"
//el simbolo "+" se usa para concatenar
//JavaScript entiende 4 + "7" como una concatenación, por lo que da un resultado de 47, convirtiendo
//el 7 en un string

var b = 4 * "7";
typeof b
//b muestra que contiene un valor "number" (numerico)
//el simbolo "*" es un operador, por lo que el codigo supone que el "7" debe ser y es un valor
//numerico con el que se hace una operación matematica, resultando en "28"

//Explicitas

var a = 20;
var b = a + "";
//Al usar console.log(b) en la terminal, imprimirá el resultado de 20, e indefinido debajo.
//Para hacer que el 20 se vuelva string sin concatenar:
var c = String(a);
//Al usar typeof c se muestra que su  (20) es un string, habiendo hecho del 20 de a ahora un string

//Para hacer de nuevo un 20 numerico:
var d = Number(c)
//Si introducimos typeof d, muestra que su valor (20) es numerico de nuevo.