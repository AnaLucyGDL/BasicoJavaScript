//Un loop es un bucle con el que una función puede puede seguir pasando mientras su condición se cumpla

var estudiantes = ["Lucy", "Bety", "Ale", "Janie"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}
//Se está creando una variable que es igual a 0 (var i = 0;) 
//La función se ejecutará mientras (;) i sea menor a la longitud de mi array de estudiantes, y en cada
//bucle se le sumará uno a i
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
//se llama a esta función, que mostrará el saludo con el nombre del almuno segur la posición
//del index basado en i
}