
// TODO: Problem 1
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc: number, num: number) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// TODO: Problem 2
function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((item, index) => numbers.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Sample Output: [1, 2, 3, 4, 5]


// TODO: Problem 3
function countWordOccurrences(sentence: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); // Sample Output: 2


// TODO: Problem 4
type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
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
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Sample Input
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // Output: Alice


// TODO: Problem 6
interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
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
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const currentYear : number = new Date().getFullYear();
        return currentYear - this.year;
    }
}

// Sample Input 1
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge()); // Output: 6 (assuming current year is 2024)


// TODO: Problem 8
function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in (obj as object));
}

// Sample Input
const personOld = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personOld, ["name", "age"])); // Output: true




