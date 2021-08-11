//Creación de la función constructora
               //propiedades que se esperan que tenga la "template"
function auto (marca, modelo, anio){
    this.marca = marca; 
    //el this es una variable especifica, aquí se usa como referencia al objeto. Nuestro objeto en 
    //este caso es la función "auto". Se referencia a la función constructora "auto" y la palabra
    //clave "marca" que es igual a la propiedad del objeto (los parametros)
    this.modelo = modelo;
    this.anio = anio;
}
//tengo mi función que tiene como parametro, las propiedades que espero que tenga mi función
auto;
//al introducirlo en ña consola del navegador, se muestra la *función entera de nuevo:
// function auto (marca, modelo, anio){
//    this.marca = marca; 
//    this.modelo = modelo;
//    this.anio = anio;
//}

//Para construir un objeto nuevo relacionado al anterior template*
//"new" es un operador para generar una nueva estancia de la función constructora
//una estancia es un objeto derivado de otro
var autoNuevo = new auto ("Tesla", "Model 3", 2020);

autoNuevo;
//al introducirlo en la consola del navegador, se muestra:
// auto {marca: "Tesla", modelo: "Model 3", anio: 2020}

//Ejemplos de nuevos objetos que son estancias de nuestra función constructora
var autoNuevo2 = new auto ("Tesla", "Model X", 2018);
var autoNuevo3 = new auto ("Toyota", "Corolla", 2020);

autoNuevo2; //auto {marca: "Tesla", modelo: "Model X", anio: 2018}
autoNuevo3; //auto {marca: "Toyota", modelo: "Corolla", anio: 2020}
//según las funciones que sean llamadas en consola, se mostrará lo correspondiente a cada una