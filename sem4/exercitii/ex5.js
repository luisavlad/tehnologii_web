const increaseSalary = (salaries, percent) => {
  if (!Array.isArray(salaries)) {
    throw new Error("The first parameter must be an array!");
  } else if (typeof percent !== "number") {
    throw new Error("The second parameetr must be a number!");
  } else {
    for (let i = 0; i < salaries.length; i++) {
      salaries[i] = salaries[i] + salaries[i] * (percent / 100);
    }
  }
  return salaries;
};

try {
  const array = [150, 450, 1000];
  console.log("Original salaries = " + array);

  increaseSalary(array, 10);
  console.log("Updated salaries = " + array);

  increaseSalary(45, 30);
  console.log("Updated salaries = " + array);

  increaseSalary(array, "hello");
  console.log("Updated salaries = " + array);
} catch (error) {
  console.warn(error);
}
