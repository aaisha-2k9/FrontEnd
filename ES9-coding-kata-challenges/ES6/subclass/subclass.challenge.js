
  // inheritance - subclasses

  //implement methods in subclass (Human) which will override parent class functionality

  //1. implement a custom function which will add "Mr" to name property in subclass
  //2. implement a method in subclass which will increment the power by 2
  //3. implement a method in subclass to reduce the power by half
  //4. add 2 more properties to Human class - city and state (private to human class)
  class superhero {
      constructor(name, strength, speed) {
          this._name = name;
          this._strength = strength;
          this._speed = speed;
          // this.goodHero = true; // focus on this
      }
      powerUp() {
          this.strength += 5;
      }
      get name() {
          console.log("get name");
          return this._name;
      }
      set name(newname) {
          this._name = newname;
      }
      static goodHero() {
          return true;
      }
  }

  class Human extends superhero {
      constructor(healthpoints,city,state, ...superherostuff) {
          super(...superherostuff);
          this._healthpoints = healthpoints;
          this._city=city;
          this._state=state;
      }
       set name(name) {
           this._name = name;
       }
       modifyName (name){
        return  "Mr" + super.name;
      }
      incrementPower(){
        this._strength +=2;
      }
      reducePower(){
        this._strength /=2;
      }
  }
  const details = [20, "Hyderabad", "Telangana", "Bill", 10, 8]
  const hero3 = new Human(...details);
  console.log(hero3);
  const hero4 = new superhero(20,"abc", 8);
console.log(hero4);
  hero3.modifyName();
  console.log("After the change: add Mr to name property in subclass" , hero3.modifyName());
  hero3.incrementPower();
  console.log("After the change: increment power by two" , hero3);
  hero3.reducePower();
  console.log("After the change: Reduce power by Half" , hero3);
