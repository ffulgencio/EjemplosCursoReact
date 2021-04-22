var numeros = [1,2,3,4,5,6,7];

// creamos la funcion que map va a ejecutar por cada elemento del arreglo.
const duplicar = num => num * 2;

const duplicados = numeros.map(duplicar);
//                 [2,4,6,8,10,12,14]

// tambien podemos llamar a map y crear la funcion en linea
const duplicados2 = numeros.map(elemento => elemento * 2)
//                 [2,4,6,8,10,12,14]