//1-función para realizar una piramide numerica
let hilera = "";
function Piramide (numero){
for(let i=1; i<=numero; i++)
{
  hilera = hilera + i;
  console.log(hilera);
}}
//por medio de un prompt se ingresa el numero hasta el que quiere llegar la piramide
let num = parseInt(prompt("Ingresa el numero de tamaño de la piramide"));

Piramide(num);



//2- funcion que recibe 2 arrays, los compara y devuelve en otro array los elementos que están en ambos

let colores1 = ["verde", "rojo", "azul", "amarillo", "rojo"];
let colores2 = ["rojo", "blanco", "negro", "naranja", "azul"];
let colores3 = [];

function generarArrayDeCoincidencias (arreglo1,arreglo2){
  for (i=0;i<arreglo1.length; i++){
    for (x=0; x<arreglo2.length; x++){
      if (arreglo1[i] === arreglo2[x]){
        colores3.push(arreglo1[i])
      }
    } 
  }
  const coloresSinDuplicados = new Set(colores3);
  let resultadoColores = [...coloresSinDuplicados];
  console.log(resultadoColores);
}

generarArrayDeCoincidencias(colores1, colores2);

// 3.1-Dado el siguiente objeto Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }
//3.2 Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
//3.3 Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe

let montoTotal = 0;

class Carrito {
  constructor(montoTotal, productos) {
    this.productos=productos= [];
    this.montoTotal=montoTotal;
  }

  agregarProducto (nombre, precio, unidades){
    if(this.productos.some(n=> n===nombre)){
      console.log("El producto ya existe");
    }else
    { this.productos.push(nombre);
      montoTotal = precio * unidades + montoTotal;
    }
  }
}

const carrito1 = new Carrito(); //creamos el nuevo carrito
carrito1.agregarProducto("pan", 5, 2);     //se agregan productos al carrito
carrito1.agregarProducto("leche", 20, 2);
carrito1.agregarProducto("jabon", 3, 4);
carrito1.agregarProducto("leche", 20, 2);  //como ya esta agregado al carrito aparece el   mensaje de que ya existe el producto
console.log(carrito1);
console.log(montoTotal);

