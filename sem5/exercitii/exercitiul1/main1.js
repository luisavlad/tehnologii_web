import * as Module1 from "./module1.js";

const generateGreeting = (name) => {
  if (name === "Luisa") {
    Module1.greeting(name);
    console.log(`You wrote this program, ${name}!`);
  } else {
    console.log(`Welcome to this program, ${name}!`);
  }
  return `Greeted user named ${name}`;
};

console.log(generateGreeting("Luisa"));
console.log(generateGreeting("Alexandra"));
