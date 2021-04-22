// nos permite descomponer un objeto en sus propiedades individuales
var cliente = {
    nombre:"José",
    apellido: "Martinez",
    edad:40
}

// aplicamos destructuring al objeto
const { nombre, apellido } = cliente;

console.log(`Bienvenido ${ nombre } ${apellido}`);

// destructuring de arreglos
var numeros = [20,30];

// aplicamos destructuring al arreglo
const [x, y] = numeros;

// otros ejemplos
const sumar = (valores) =>{
    const [ x, y ] = [5,4]
    return x + y;
}

const login = user => {
    const obj2 = {
        name:"pepe"
    }
    const {name: nombre} = obj2; //aqui creamos un alias a name
    const { name, password} = user

    if (name == "admin" && password == "123456"){
        console.log(`Bienvenido ${name}`);
    }else{
        console.log("Usuario no autorizado!");
        console.log(name)
    }
}



const user = {
    name:"admin",
    password:"123456"
}

login(user);