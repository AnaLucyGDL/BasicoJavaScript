//Más metodos para recorrer arrays con ejemplo anterior
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

//Metodo Find: Generara un nuevo array con el objeto del array principal que se le pasara si es que existe
//según la validación (true/false)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
    //se pide que regrese el articlo con el nombre "Laptop"
});

encuentraArticulo;
//Una vez se llama al metodo anterior, la consola muestra el contenido del nuevo array con el articulo 
//que cumple con lo pedido
//{nombre: "Laptop", costo: 20000}

//Metodo forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//Regresa los nombres de todos los articulos
//Metodo que se usa para consultar productos con cierto nombre en la e-commerce

//Metodo Some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos;
//Regresa una validación de verdadero o falso según si hay articulos que cumplan la validación o no.
//También genera un nuevo array