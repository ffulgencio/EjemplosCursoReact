// funcion tradicional
function greet (){
    return "Hola"
}

// asignación de una función anónima a una variable
const greet2 = function (){ 
    return "Hola";
}

// exactamente la misma función anónima pero expresada como funcion flecha
const greet3 =  () => "Hola";


// // asignación de una función anónima con parámetro
const greetPlus = function (name){
    return `Hola ${name}`
}

// exactamente la misma función anónima pero expresada como funcion flecha
const greetPlus2 = name => `Hola ${name}`;

// otros ejemplos
function duplicate(num){
    let resultado = num * 2;
    return resultado;
}

const duplicate2 = num => num * 2;

// aquí una función flecha con dos parámetros
const sum = (x, y) => x + y;



