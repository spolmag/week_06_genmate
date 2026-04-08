const Drink = require("./Drink.js");

class Beer extends Drink {
  constructor(name, type, onHand, degree) {
    super(name, type, onHand);
    this.degree = degree;
  }
}

module.exports = Beer;
