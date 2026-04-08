const Drink = require("./Drink.js");

class Juice extends Drink {
  constructor(name, type, onhand, madefrom) {
    super(name, type, onhand);
    this.madefrom = madefrom;
  }
}

module.exports = Juice;
