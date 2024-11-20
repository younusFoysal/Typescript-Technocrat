"use strict";
// TODO: Problem 1
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// TODO: Problem 2
function removeDuplicates(numbers) {
    return numbers.filter((item, index) => numbers.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Sample Output: [1, 2, 3, 4, 5]
// TODO: Problem 3
function countWordOccurrences(sentence, word) {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); // Sample Output: 2
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    throw new Error("Unknown shape");
}
// Sample Input 1
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
// Sample Input 2
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea); // Output: 24
// TODO: Problem 5
function getProperty(obj, key) {
    return obj[key];
}
// Sample Input
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // Output: Alice
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
// Sample Input
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
// Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }
// TODO: Problem 7
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
// Sample Input 1
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge()); // Output: 6 (assuming current year is 2024)
// TODO: Problem 8
function validateKeys(obj, keys) {
    return keys.every(key => key in obj);
}
// Sample Input
const personOld = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personOld, ["name", "age"])); // Output: true
