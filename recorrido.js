//Crear arrays conteniendo objetos, y como obtener propiedades especificas de los objetos dentro del array

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
    //mientras más objetos se tengan, el filtrar se vuelve más "valioso" para ocupar estos metodos
]

//Creación de metodos para recorrer el contenido del array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
})
//El filter está agregando a un nuevo array los objetos que cumplen con la validación (articulo.costo <= 500)

articulosFiltrados;
//Se introduce en consola y muestra que hay dos objetos que cumplen con lo pedido en la función del
//metodo "articulosFiltrados"

