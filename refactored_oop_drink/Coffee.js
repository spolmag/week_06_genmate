const Drink = require("./Drink.js");

class Coffee extends Drink {
  constructor(name, type, onHand, bean) {
    super(name, type, onHand);
    this.bean = bean;
  }
}

module.exports = Coffee;
