console.log("Js 08 Clases");

//-----------------------Crear una clase---------------------
// Para el nombre se una la notacion Pascal-Case (UpperCamelCase)

class Car{

    // Metodo constructor
    constructor(name, brand, price){
        console.log("Has creado un auto: " + name);
        this.nameCar = name;
        this.brand = brand;
        this.price =price
    }
    igniteEngine = ( state) => state? "Engine is on" : "Engine is off";

    //Agregar una funcion que describa las caracteristicas del auto 

    details = () =>{
        return `${this.nameCar} de ${this.brand} que cuesta ${this.price}`
    }
}

//------- Usar la clase para instanciar (crear objetos) ----------
// Para instanciar se usa new NobreClase

const elantra = new Car("Elantra", "Hyundai", "$390,000");
const aveo = new Car("Aveo", "Aveo", "$250,000");

console.log(elantra);
console.log(aveo);
console.log(elantra.nameCar + " " +elantra.igniteEngine(true) );
console.log(elantra.details());
console.log(aveo.details());