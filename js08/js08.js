console.log("Js 08 Objetoss");

//----------- Crear un bobjeto en JS--------------

const frutasColores ={
    //Clave valor
    fresa: ["roja"],
    pepino: ["verde"],
    mango: ["amarillo"],
    naranja: ["anaranjado", "amarilla"],
    mandarina: ["anaranjado"],
    mora: ["morada"],
    pitaya: ["rosa", "roja", "blanca", "amarilla"]
};

console.log("El pepino es " + frutasColores.pepino);
console.log("La pitaya es "+frutasColores.pitaya.join("-"));7

//Modificar un valor
// Agrgar el color verde al mango

frutasColores.mango.push("verde");
//frutasColores.mango ="verde";
console.log(("El mango es " +frutasColores["mango"].join("-")));
console.log(("El mango es " +frutasColores.mango.join(" y ")));


//----------------Iterando los objetos---------------------------
// Iterar los valores con for in
// va a itrear sobre las propiedades {keys o clave } de un objeto


for(let fruta in frutasColores){
    console.log(`${fruta} es de color ${frutasColores[fruta].join(" - ")}`);
};

//------------------ Uso de symbol ------------------------
/*
se utiliza para añadir claves de propiedades unicas y que esten 
ocultas a otros mecanismos como la iteracion y stringife.

Esto nos sirve para realizar el concepto de encapsulacion.
*/
const hiddenSalary = Symbol();
const dataEmployee = {
    nombre: "EL ferras",
    apellido: "Gomez",
    [hiddenSalary]: 50_000
};

for (let a in dataEmployee){
    console.log(`${a}: ${dataEmployee[a]}`);
};
localStorage.setItem("datos-empleado", JSON.stringify(dataEmployee));
sessionStorage.setItem("datos-empleado", JSON.stringify(dataEmployee));