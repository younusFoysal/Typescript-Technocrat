function processInput(input: string | number): number | string {
    if (typeof input === "string") {
        return input.length;
    } else {
        return input * input;
    }
}
console.log(processInput("hello")); // Output: 5
console.log(processInput(5));       // Output: 25
