class Drink {
  constructor(name, type, onHand) {
    this.name = name;
    this.type = type;
    this._onHand = 30;
  }

  drinkStatus() {
    if (this._onHand <= 10) return "Low stock";
    if (this._onHand <= 30) return "OK";
    return "Too much stock";
  }
}

module.exports = Drink;

//Add sub class
//Mzx ->Beer->defree, Give->Softdrink->sugar, Palm->Juice->madeFrom, O'->Tea->fromCountry, Weaw->Coffee->beanType
