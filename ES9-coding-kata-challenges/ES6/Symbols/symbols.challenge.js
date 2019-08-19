// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    get color() {
        console.log("get name");
        return this[CARCOLOR];
    }
    set color(color) {
        this[CARCOLOR] = color;
    }
    get make() {
        console.log("get name");
        return   this[CARMAKE];
    }
    set make(make) {
          this[CARMAKE] = make;
    }
    get model() {
        console.log("get name");
        return this[CARMODEL];
    }
    set model(model) {
        this[CARMODEL]= model;
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.color = `Black`;
myCar.model = `Land Rover`;
myCar.make = `Jaguar`;
console.log(myCar.color);
console.log(myCar);
