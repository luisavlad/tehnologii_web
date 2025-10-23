function exponential(nr) {
  const cache = [];

  const exp = (p) => {
    if (p in cache) {
      return cache[p];
    }

    let number;

    if (p === 0) {
      number = 1;
    } else if (p === 1) {
      number = nr;
    } else {
      console.log(`calculam rezultatul pentru puterea ${p}...`);
      number = nr * exp(p - 1);
    }

    console.log(`Cache[${p}] are valoarea ${number}`);
    cache[p] = number;
    return cache[p];
  };

  return exp;
}

const n = exponential(4);
console.log("Rezultatul este " + n(5));
console.log("Rezultatul este " + n(5));
console.log("Rezultatul este " + n(2));
console.log("Rezultatul este " + n(3));
