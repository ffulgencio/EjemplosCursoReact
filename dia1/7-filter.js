// la función filter nos permite hacer filtro sobre una colección.
var numeros = [1,2,3,4,5,6,7];

// aqui definimos la función que hará el filtro (predicado)
function predicate (num){
    return num % 2 == 0
}

let pares = numeros.filter(predicate);
// [2,4,6]

// tambien podemos llamar a filter y definir el predicado en linea
let pares2 = numeros.filter(elemento => elemento % 2 == 0);
// [2,4,6]
