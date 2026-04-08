class Shop {
  constructor(shopName) {
    this.shopName = shopName;
    this.drinks = [];
  }

  addDrink(drinkName) {
    this.drinks.push(drinkName);
    console.log(`${drinkName.name} add to ${this.shopName}`);
  }

  showDrinksStatus() {
    console.log(`\n-----Welcome to ${this.shopName}-----`);
    console.log(`Let's select your drink!\n`);
    this.drinks.forEach((drinkType) => {
      console.log(
        `Type: ${drinkType.type}, Name: ${drinkType.name} | Stock status: ${drinkType.drinkStatus()}`,
      );
      console.log(`-------------------`);
    });
  }
}

module.exports = Shop;
