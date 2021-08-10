//Codigo de clase pasada: Loops (for)
var estudiantes = ["Lucy", "Bety", "Ale", "Janie"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//Mientras el parametro sea verdad, la función se ejecuta
   while (estudiantes.length > 0) {
       var estudiante = estudiantes.shift();
//se genera la variable estudiante que es igual al array con el metodo de mutación que estara sacando
//elementos y manda a llamar la función con la variable de "estudiante" como parametro
       saludarEstudiantes(estudiante);
}