Number.prototype.times = function (f) {
  let value = this.valueOf();
  for (let i = 0; i < value; i++) {
    f();
  }
};

let nr = new Number(7);
nr.times(() => {
  console.log("Test!");
});
