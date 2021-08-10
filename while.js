//Codigo de clase pasada: Loops (for)
var estudiantes = ["Lucy", "Bety", "Ale", "Janie"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//Mientras el parametro sea verdad, la función se ejecuta
   while (estudiantes.length > 0) {
       var estudiante = estudiantes.shift();
       saludarEstudiantes(estudiante);
}