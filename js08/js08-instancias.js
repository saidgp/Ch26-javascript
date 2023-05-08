import { Car, ElectricCar } from "./js08-claseAuto.js";

console.log("Importar y exportar clases");

const elantra = new Car("Elantra", "Hyundai", "$410,000");

console.log(elantra.details());
console.log(elantra.brand)
console.log(elantra.price)

const elentrElectrico = new ElectricCar("Elantra electrico", "Hyundai", "$810,000", "50");
console.log(elentrElectrico.getDetails());