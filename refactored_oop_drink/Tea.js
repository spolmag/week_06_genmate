const Drink = require("./Drink");

class TeaDrink extends Drink {
  constructor(name, type, onHand, fromCountry) {
    super(name, type, onHand);
    this.fromCountry = fromCountry;
  }

  teaFrom() {
    console.log(`This ${this.name} is from ${this.fromCountry}.`);
  }
}

const Matcha = new TeaDrink("Matcha", "Tea", 10, "Japan");

Matcha.teaFrom();
