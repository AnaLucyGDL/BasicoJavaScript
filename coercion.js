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