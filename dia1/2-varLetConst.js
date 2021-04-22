// con var creamos variables globales
var nombre = "Jhon";
nombre = "Maria" // el valor almacenado en una variable se puede cambiar

// con let creamos variables a nivel de bloque
function fn(){
    let edad = 30;
}
console.log(edad); // Error: la variable edad solo existe dentro de la función

// con const creamos variables cuyo valor no puede ser cambiado
const pi = 3.141592;
pi = 4 // Error: el valor de las constantes no se puede reasignar.