//Scope: Alcance que tienen las variables. 
//Depende mucho donde declares e inicialices una variable si se tiene acceso a esta o no

//Scope Global
var nombre = "Lucy";

//Scope Local
function fun(){
    var apellido = "Guzmán";
    return nombre + "" + apellido
}