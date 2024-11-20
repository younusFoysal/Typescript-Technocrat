function processData(data: unknown): string | number | undefined {
    if (typeof data === "string") {
        return data.toUpperCase();
    } else if (typeof data === "number") {
        return data * data;
    }
}
console.log(processData("hello")); // Output: "HELLO"
console.log(processData(4));       // Output: 16
