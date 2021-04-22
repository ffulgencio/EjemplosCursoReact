
// clase base o super clase
class Estudiante{
    constructor(nombre){
        // definimos propiedades de la clase
        this.nombre = nombre;
        this.apellido = "Maldonado";
        this.edad = 30
    }
}

// clase hija o subclase con la palabra extends
class Avanzados extends Estudiante{
    constructor(nombre){
        super(nombre);
        this.avanzado = true;
    }

    // metodos de la clase
    greet = () =>{
        console.log("Hello  React");
    }

    anotherMethod(){
        // do something
    }
}

// instanciamos un objeto del tipo de la subclase
var est2 = new Avanzados("Manuel");
est2.greet()