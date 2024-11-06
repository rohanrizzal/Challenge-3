// Car constructor function
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Car prototype methods for accelerating and braking
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // EV constructor function inheriting from Car
  function EV(make, speed, charge) {
    Car.call(this, make, speed); // Call the parent constructor with the EV context
    this.charge = charge; // Additional property for EV
  }
  
  // Inherit the Car prototype methods
  EV.prototype = Object.create(Car.prototype);
  
  // Set the constructor property correctly
  EV.prototype.constructor = EV;
  
  // Method to charge the battery
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} charged to ${this.charge}%`);
  };
  
  // Override the accelerate method for EV
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // Create an EV instance with the test data
  const tesla = new EV('Tesla', 120, 23);
  
  // Testing the EV methods
  tesla.accelerate();      // Increases speed and decreases charge
  tesla.brake();           // Uses inherited brake method from Car
  tesla.chargeBattery(90); // Charges battery to 90%
  tesla.accelerate();      // Observe the updated speed and charge
  