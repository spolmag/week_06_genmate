const Drink = require("./Drink.js");

class Tea extends Drink {
  constructor(name, type, onHand, fromCountry) {
    super(name, type, onHand);
    this.fromCountry = fromCountry;
  }

  teaFrom() {
    console.log(`This ${this.name} is from ${this.fromCountry}.`);
  }
}

module.exports = Tea;
