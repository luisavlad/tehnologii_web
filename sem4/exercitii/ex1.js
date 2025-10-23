class SirCrescator {
  #initialNumber;
  #nextNumber;

  constructor(initialNumber) {
    this.#initialNumber = initialNumber;
  }

  next() {
    this.#nextNumber = this.#initialNumber + 2;
    this.#initialNumber = this.#nextNumber;
    return this.#nextNumber;
  }
}

let number = new SirCrescator(4);

for (let i = 0; i < 10; i++) {
  console.log(number.next());
}
