class Drink {
  constructor(name, type, price, onHand) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.onHand = onHand;
  }

  drinkStatus() {
    if (this.onHand <= 0) return "Out of Service!";
    if (this.onHand <= 10) return `Last ${this.onHand} serve!`;
    return "Ready to serve.";
  }
}

module.exports = Drink;

//Add sub class
//Mac ->Beer->defree, Give->Softdrink->sugar, Palm->Juice->madeFrom, O'->Tea->fromCountry, Weaw->Coffee->beanType
