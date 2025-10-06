let sayHello = (name) => `Hello, ${name}!`;

console.log(sayHello(process.argv[2]));

let stringArray = ["buna ", "ziua ", "omule"];

let newString = (array) => array[0] + array[1] + array[2];

console.log(newString(stringArray));

function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

function nrOfDifferentCharacters(string1, string2) {
  if (string1.length != string2.length) {
    return -1;
  } else {
    let counter = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] != string2[i]) {
        counter++;
      }
    }
    return counter;
  }
}

console.log(nrOfDifferentCharacters("hei", "hie"));

function occurences(text, character) {
  // let count = 0;
  // for (let i = 0; i < text.length; i++) {
  //   if (text.charAt(i) === character) {
  //     count++;
  //   }
  // }

  // return count;
  return text.split(character).length - 1;
}

console.log(occurences("sample text", "e"));

function createANewArray(listaNumere) {
  let array = listaNumere.slice();

  return array;
}

console.log(createANewArray([3, 5, 120, 8659]));

function addToArray(array, ...args) {
  // let args = arguments;
  // let array = args[0];

  for (let i = 0; i < args.length; i++) {
    array.push(args[i]);
  }

  return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));

function intertwinedArrays(array1, array2) {
  if (array1.length != array2.length) {
    return -1;
  } else {
    let arrayNou = [];
    let k = 0;
    let m = 0;
    for (let i = 0; i < array1.length * 2; i++) {
      if (i % 2 == 0) {
        arrayNou[i] = array1[k];
        k++;
      } else {
        arrayNou[i] = array2[m];
        m++;
      }
    }

    return arrayNou;
  }
}

console.log(intertwinedArrays("ccmc", "iaaa").join(", "));

const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

if (process.argv.length < 3) {
  console.log("not enough params");
} else {
  console.log(checkPrime(parseInt(process.argv[2])));
}

function calculeazaElement(pozitie) {
  let elementSiMaiAnterior = 1;

  if (pozitie === 0 || pozitie === 1) {
    return elementSiMaiAnterior;
  }

  let elementAnterior = 1;
  let i = 2;
  let elementCautat;
  while (i <= pozitie) {
    elementCautat = elementAnterior + elementSiMaiAnterior;
    elementSiMaiAnterior = elementAnterior;
    elementAnterior = elementCautat;
    i++;
  }

  return elementCautat;
}

// am considerat ca sirul incepe de la pozitia 0
console.log(calculeazaElement(5)); // 1 1 2 3 5 8
