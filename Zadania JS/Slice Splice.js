const numbers = [0, 0, 1, 1, 2, 2, 2];
const colors = ["red", "green", "blue", true, 123];
const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

let numbers2 = numbers.slice(0, 2);
console.log(numbers2);

let numbers3 = numbers.slice(4, 7);
console.log(numbers3);

let randomStuff = colors.splice(3, 2);
console.log(colors);
console.log(randomStuff);

let newCars = cars.splice(2, 4, "test");
console.log(newCars);

console.log(cars);
