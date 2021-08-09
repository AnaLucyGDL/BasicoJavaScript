//El switch es una forma de generar una condicion y validar cosas, pero este funciona por casos.
//Si un caso es verdad, se ejecuta esa parte, si no, se pasa a otros casos. Nuestro "else" es "default"
var numero = 1;
switch (numero){
    case 1:
        console.log("Es uno");
        break; //ya no deja que pase a los otros casos
    case 10:
        console.log("Es diez");
        break;
    case 100:
        console.log("Es cien");
        break;
    default:
        console.log("No es ninguno");
        break;
}