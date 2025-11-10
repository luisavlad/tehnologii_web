const distance = (a, b) => {
  if (
    (typeof a !== "string" && !(a instanceof String)) ||
    (typeof b !== "string" && !(b instanceof String))
  ) {
    throw new Error("InvalidType");
  }

  if ((a.length === 0 && b.length === 0) || a === b) {
    return 0;
  }

  if (
    (a.includes(b) && a.length - b.length === 1) ||
    (b.includes(a) && b.length - a.length === 1)
  ) {
    return 1;
  }

  let longestString = "";
  let shortestString = "";

  if (a.length > b.length) {
    longestString = a;
    shortestString = b;
  } else {
    longestString = b;
    shortestString = a;
  }

  let substring = "";

  for (let i = 0; i < longestString.length; i++) {
    for (let j = shortestString.length; j > 0; j--) {
      substring = shortestString.slice(i, j);

      if (longestString.includes(substring)) {
        return (
          longestString.indexOf(substring) +
          (longestString.length -
            longestString.indexOf(substring) -
            substring.length)
        );
      }
    }
  }
};

// console.log(distance("book", "books"));
// console.log(distance("cats", "placate"));
// console.log(distance([], "c"));
// console.log(distance("", ""));
// console.log(distance("bring", "fringe"));

module.exports.distance = distance;
