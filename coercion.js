//Coerción: Forma en que se puede cambiar un tipo de valor a otro
//Coerciones implicitas: Cuando el lenguaje ayuda y cambia un tipo de valor a otro
//Coerciones explicitas: Forma en que obligamos que un valor de un tipo cambie a otro

4 + "7"; //47
4 * "7"; //28
2 + true; //3
false - 3; //-3

//En terminal de navegador:
var a = 4 + "7";
typeof a
//a muestra que contiene un valor "string"
//el simbolo "+" se usa para concatenar
//JavaScript entiende 4 + "7" como una concatenación, por lo que da un resultado de 47, convirtiendo
//el 7 en un string