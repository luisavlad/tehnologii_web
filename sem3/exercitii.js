// Exemplul 1
const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse",
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) => {
  const result = words.filter((word) => {
    if (word !== forbiddenWord && word.length >= minLength) {
      return true;
    }
    return false;
  });
  return result;
};

console.log("Exemplul 1: " + filterWords(words, forbiddenWord, minLength));

// Exercitiul 1
const years = [2000, 2005, 1980, 2015, 2007, 1999, 2020];
const currentYear = new Date().getFullYear();

function calculateAge(year) {
  return currentYear - year;
}

const over18 = (numbers) => {
  const newArray = years.map(calculateAge);
  const res = newArray.filter((year) => {
    if (year >= 18) {
      return true;
    }
    return false;
  });
  return res;
};

console.log("Exercitiul 1: " + over18(years));

// Exemplul 2
const getTotalArea = (squareDimensions) => {
  return squareDimensions
    .map((side) => {
      return side * side;
    })
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("Exemplul 2: " + "result: ", result);

//Exercitiul 2
const division = (numbers, divisor) =>
  numbers
    .map((number) => {
      if (number % divisor === 0) return number;
      else return 0;
    })
    .reduce((previous, current) => previous + current, 0);

const res = division(years, 5);
console.log("Exercitiul 2: " + "Suma = ", res);

// Exemplul 3
const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + i + "}") !== -1) {
      modified = modified.replace("{" + i + "}", format[i]);
    }
  }
  return modified;
};

console.log(
  formatString(
    "Exemplul 3: " + "this is a {0} string  and we've {1} it ",
    "nice",
    "modified"
  )
);

// Exercitiul 3
const formatStringFunction = (s, ...format) => {
  let newString = s;
  for (let i = 0; i < format.length; i++) {
    if (newString.indexOf("{substantiv}") !== -1) {
      newString = newString.replace("{substantiv}", format[0]);
    } else if (newString.indexOf("{adjectiv}") !== -1) {
      newString = newString.replace("{adjectiv}", format[1]);
    }
  }
  return newString;
};

console.log(
  formatStringFunction(
    "Exercitiul 3: " + "un {substantiv} este {adjectiv}",
    "calut",
    "dragut"
  )
);

// Exemplul 4
const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {
  const result = [];
  for (const element of array) {
    result.push(transformation(element));
  }
  return result;
};
console.log("Exemplul 4: " + map(sampleArray, (x) => x * 2));

// Exercitiul 4
const reduce = (values, aFunction, initialValue) => {
  let res = initialValue;

  for (const value of values) {
    res = aFunction(res, value);
  }

  return res;
};

function sumOfNumbers(nr1, nr2) {
  return nr1 + nr2;
}

console.log("Exercitiul 4: " + reduce(sampleArray, sumOfNumbers, 0));

// Exemplul 5
const sampleDictionary = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
];

const sampleText = `
    best
    read
    on
    windy
    nights
`;
const checkAcrostic = (text, dictionary) => {
  const candidate = text
    .split("\n")
    .filter((e) => e)
    .map((e) => e.trim())
    .map((e) => e[0])
    .join("");

  return dictionary.indexOf(candidate) !== -1;
};

console.log("Exemplul 5: " + checkAcrostic(sampleText, sampleDictionary));

// Exercitiul 5
const dictionary2 = ["interzis", "nepotrivit", "urat"];

const censorship = (s, dictionary) => {
  const censoredString = s
    .split(" ")
    .map((word) => {
      if (dictionary2.includes(word)) {
        const firstLetter = word[0];
        const lastLetter = word[word.length - 1];
        const otherLetters = "*".repeat(word.length - 2);

        return firstLetter + otherLetters + lastLetter;
      }
      return word;
    })
    .join(" ");

  return censoredString;
};

console.log(
  "Exercitiul 5: " +
    censorship(
      "Acest program este nepotrivit pentru minori , poate fi considerat urat , deci este interzis minorilor .",
      dictionary2
    )
);

// Exemplul 6
const getFilteredObjects = (array, object) => {
  return array.filter((element) => {
    let result1 = false;
    Object.keys(object).forEach((key) => {
      if (!element[key] || element[key] !== object[key]) {
        result1 = true;
      }
    });
    return result1;
  });
};

const laptops = [
  {
    brand: "HP",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Lenovo",
    processor: "i5",
    ram: 16,
  },
  {
    brand: "Acer",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Asus",
    processor: "i7",
    ram: 8,
  },
];

const result1 = getFilteredObjects(laptops, { processor: "i5", ram: 8 });
console.log("Exemplul 6: " + "result ", result1);

// Exercitiul 6
const sortObjects = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else {
      return 1;
    }
  });
};

const result2 = sortObjects(laptops, "brand");
console.log("Exercitiul 6: " + "result: ", result2);

// Exercitiul 7 - optional
const average = (array) => {
  const number = array.reduce((previous, current) => {
    return previous + current;
  });

  return number / array.length;
};

console.log(
  "Exercitiul 7: " + "Media numerelor date este = " + average(sampleArray)
);
