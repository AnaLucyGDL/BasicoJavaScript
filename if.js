//Las condicionales son las reglas que se aplicaran para validar si algo es verdadero o falso
//y que se puedan generar acciones con eso

//condicional con validación true o false
if (false){
    console.log("Hola");
} else {  //else (de otra manera)
    console.log("Soy falso"); //si la condición del "if" no se cumple, se ejecuta la función del "else"
}

//Para cuando se tienen valores que quizás no se cumplan en la primera condición, pero puedan validarse
//antes de la entrada del "else".

if (a<20){
    console.log("Hola");
} else if (a>25) {
    console.log("Soy falso");
} else {

}