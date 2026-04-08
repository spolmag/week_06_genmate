const Shop = require("./Shop.js");
const Beer = require("./Beer.js");
const Juice = require("./Juice.js");
const Coffee = require("./Coffee.js");
const Softdrink = require("./Softdrink.js");
const Tea = require("./Tea.js");

const Genmate5shop = new Shop("Genmate 5 Drink Shop");

const Blackbeer = new Beer("Blackbeer", "Hops Beer", 6, "15 Degree");
const Lagerbeer = new Beer("Lagerbeer", "Yeast Beer", 10, "7 Degree");
const Hoegaarden = new Beer("Hoegaarden", "Malt Beer", 13, "9 Degree");
const orangeJuice = new Juice("Doikum", "Juice", 10, "oragne");
const Matcha = new Tea("Matcha", "Tea", 10, "Japan");
const Americano = new Coffee("Americano", "Coffee", 25, "Arabica");
const Coke = new Softdrink("Coke", "Soft drink", 55, "0%");

Genmate5shop.addDrink(Blackbeer);
Genmate5shop.addDrink(Lagerbeer);
Genmate5shop.addDrink(Hoegaarden);
Genmate5shop.addDrink(orangeJuice);
Genmate5shop.addDrink(Matcha);
Genmate5shop.addDrink(Americano);
Genmate5shop.addDrink(Coke);

Genmate5shop.showDrinksStatus();
