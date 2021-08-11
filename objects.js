//Sintaxis: var objeto = {};
//Al objeto se manejan con propiedades, y las propiedadss (la forma en que se pueden entender) es 
//una combinación de palabras clave y valores

//objeto con tres propiedades
var carro = {
    marca : "Toyota",
    modelo: "Corolla",
    anio : 2020, //la ñ es un caracter especial que en el lenguaje no se entiende

//Cuando se trabaja la estrucura del objeto, se puede hacer que una propiedad sea una función
//que use propiedades dentro del objeto. Se le llama metodo de objeto
    detalledelcarro : function(){
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }

};
carro.detalledelcarro();
//Se muestra en consola "Auto Corolla 2020"


//se llama al objeto para que muestre sus propiedades
carro;

//acceder a los objetos / acceder a los valores de un objeto

carro.marca
//La consola del navegador devolverá "Toyota" al ser el valor de la palabra clave que buscamos

carro.anio
//La consola del navegador devolverá "2020"

//*El "this" es una variable que hace referencia al objeto, en este caso hace referencia a su padre
//que es el objeto global, que es "carro".