var pares= [2,4,6]
var impares = [1,3,5,7]

// forma tradicional
var combinados = pares.concat(impares);
// propagando elementos con el operador spread (...)
var numeros = [...pares, ...impares];
// [2,4,6,1,3,5,7]

// tambien funciona con objetos
var obj1 = {name:"Jhon"}
var obj2 = {lastName:"Doe"}

// forma tradicional
var user1 = Object.assign({},obj1,obj2 )

// propagando propiedades
var user2 = {...obj1, ...obj2}

// tambien podemos agregar nuevas propiedades
var user3 = {...obj1, ...obj2, password:"123456"}

// si el valor nuevo ya está en una variable:
var password = "123456";
var user = {...obj1, ...obj2, password}