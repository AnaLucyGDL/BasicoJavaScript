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
//Una vez se llama al metodo anterior, la consola muestra el articulo que cumple con lo pedido
//{nombre: "Laptop", costo: 20000}