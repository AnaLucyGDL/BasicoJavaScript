//Scope: Alcance que tienen las variables. 
//Depende mucho donde declares e inicialices una variable si se tiene acceso a esta o no

//Scope Global
var nombre = "Lucy";

//Scope Local
//Función que genera una variable internat llamada apellido.
function fun(){
    var apellido = "Guzmán";
    return nombre + "" + apellido
    //console.log(apellido); Puede dar resultado al estar en el scope local junto a la variable que necesita
    //Un scope local tiene acceso a las variables del scope global, pero el global no tiene
    //acceso a las variables de un scope local
}

 //console.log(apellido); No puede dar resultando al estar fuera del scope local