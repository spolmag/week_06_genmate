class Coffee extends Drink {
  constructor(name, type, onHand, bean) {
    super(name, type, onHand);
    this.bean = bean;
  }
  // this is an example of polymorphism; overide the parent's method
  grown() {
    console.log(`${this.name} grown in ${this.bean}.`);
  }
}