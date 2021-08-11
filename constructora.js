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