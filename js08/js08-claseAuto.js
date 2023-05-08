
class Car {
    #brand;
    #price; 

    constructor(name, brand, price){
        this.nameCar = name;
        this.#brand = brand;
        this.#price =price
    }
    igniteEngine = ( state) => state? "Engine is on" : "Engine is off";

    details(){
        return `${this.nameCar} de ${this.brand} que cuesta ${this.price}`
    }

    set brand(newBrand){
        return this.#brand;
    }
    get brand(){
        return this.#brand

    }
    get price(){
        return this.#price
    }

}

class ElectricCar extends Car {
    #numberOfBatteries

    constructor(name, brand, price, numberOfBatteries){
        super(name, brand, price,);
        this.#numberOfBatteries = numberOfBatteries;
    }

    getDetails() {
        return `${super.details()}, tiene ${this.#numberOfBatteries} baterias`
    }
}

export { Car, ElectricCar };