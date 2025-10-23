const objectToBeCloned = {
  name: "Luisa",
  occupation: "student",
  age: 20,
};

const clone = JSON.parse(JSON.stringify(objectToBeCloned));

console.log(objectToBeCloned);
console.log(clone);
