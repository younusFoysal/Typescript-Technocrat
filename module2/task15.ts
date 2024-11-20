function isString(value: unknown): value is string {
    return typeof value === "string";
}

function printUpperCase(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log("Value is not a string");
    }
}
printUpperCase("hello"); // Output: "HELLO"
