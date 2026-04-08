const Drink = require("./Drink.js");

class Softdrink extends Drink {
  constructor(name, type, onHand, sugar) {
    super(name, type, onHand);
    this.sugar = sugar;
  }
}

module.exports = Softdrink;
